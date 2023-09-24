import { Button } from "@components";
import { IconClose } from "@components/Icons";
import { eventsConfig } from "@features/events/events.config";
import { Event } from "@features/events/events.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerEvent } from "@utils/helper";
import { Modal } from "antd";
import clsx from "clsx";
import React, { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import * as yup from "yup";

import EventRegisterInput from "./EventRegisterInput";
import EventRegisterSelect from "./EventRegisterSelect";
import EventRegisterTextArea from "./EventRegisterTextArea";

interface Props {
  show?: boolean;
  title?: string;
  centered?: boolean;
  onClose?: () => void;
  event: Event;
}

const EventRegisterModal: FC<Props> = ({
  show = false,
  title = "Modal",
  centered = false,
  onClose,
  event,
}) => {
  const { t } = useTranslation(eventsConfig.i18nNamespaces);

  const schema = yup.object().shape({
    name: yup
      .string()
      .required(`name ${t("events:errors.require_error")}`)
      .trim()
      .min(2, `name ${t("events:errors.min_name_error")}`),
    phone: yup
      .string()
      .required(`phone ${t("events:errors.require_error")}`)
      .matches(/^\+?[0-9]{10,10}$/, `${t("events:errors.phone_error")}`),
    email: yup
      .string()
      .required(`email ${t("events:errors.require_error")}`)
      .email(`${t("events:errors.email_error")}`),
    telegram: yup.string(),
    problem: yup
      .string()
      .required(`problem ${t("events:errors.require_error")}`),
    time: yup.string().required(`time ${t("events:errors.require_error")}`),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = methods.handleSubmit(async (value) => {
    try {
      const formData = new FormData();
      formData.append("Name", value.name);
      formData.append("Phone", `'${value.phone}`);
      formData.append("Email", value.email);
      formData.append("Telegram", value.telegram);
      formData.append("Problem", value.problem);
      formData.append("Time", value.time);
      formData.append("EventId", event.id as string);
      formData.append("EventName", event.name as string);
      const res = await registerEvent(formData);
      if (res) {
        onClose?.();
        toast(t("events:success.success_message"));
      }
      methods.reset();
    } catch (error) {
      console.log(error);
      toast(t("events:errors.error_message"));
    }
  });

  const handleClose = () => {
    const isEditing = methods.formState.isDirty;
    if (!isEditing) onClose?.();
    else {
      const choose = confirm(
        "Are you sure you want to close the form?. All changes will be lost"
      );
      if (choose) {
        onClose?.();
        methods.reset();
      }
    }
  };
  return (
    <Modal
      title={title}
      visible={show}
      centered={centered}
      closeIcon={<IconClose />}
      className="event-modal"
      onCancel={handleClose}
      footer={[
        <Button
          key={`event-modal-button-confirm`}
          className="px-[76px] py-[12px] bg-btn-primary rounded-[5px] hover:opacity-[0.8]"
          onClick={() => onSubmit()}
        >
          <span className="text-[15px] text-white font-bold">
            {t("events:form.submit")}
          </span>
        </Button>,
      ]}
    >
      <FormProvider {...methods}>
        <div>
          <div className="flex flex-col gap-[50px] lg:gap-[30px]">
            <EventRegisterInput
              label={t("events:form.full_name")}
              name="name"
              required
            />
            <EventRegisterInput
              label={t("events:form.phone")}
              name="phone"
              required
            />
            <EventRegisterInput
              label={t("events:form.email")}
              name="email"
              required
            />
            <EventRegisterInput
              label={t("events:form.telegram")}
              name="telegram"
            />
            <EventRegisterTextArea
              label={t("events:form.problem")}
              name="problem"
              required
            />
            <EventRegisterSelect
              label={t("events:form.have_long")}
              name="time"
              required
            />
          </div>
        </div>
      </FormProvider>
    </Modal>
  );
};

export default EventRegisterModal;
