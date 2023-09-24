import { userSelector } from "@features/auth/auth.selector";
import { Category } from "@features/events/events.type";
import { useAppSelector } from "@hooks/app";
import { Modal } from "antd";
import clsx from "clsx";
import React, { FC } from "react";

interface Props {
  title: string;
  isModalVisible: boolean;
  handleOk?: () => void;
  handleCancel?: () => void;
  categories: Array<Category>;
  onClickCategory: (id: string) => void;
  onCloseModal: () => void;
}

const CategoriesModal: FC<Props> = ({
  title,
  isModalVisible,
  handleCancel,
  handleOk,
  categories,
  onClickCategory,
  onCloseModal,
}) => {
  const user = useAppSelector(userSelector);
  return (
    <Modal
      title={title}
      visible={isModalVisible}
      closable
      onOk={handleOk}
      onCancel={onCloseModal}
      footer={null}
    >
      <div
        className="grid grid-cols-3 lg:grid lg:grid-cols-3 lg:col-span-6 lg:border-0 
                sm:grid sm:grid-cols-2 sm:col-span-6 sm:border-0 otherReport
                border-[#F5F5F5] pl-[15px] mt-1 gap-3"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            className={clsx(
              "col-span-1 md:col-span-1 md:w-full sm:gap-x-2 bg-[#EFF0F4] text-center p-2 rounded-[3px] text-[11px] md:text-[13px] text-[#010000] font-normal transition-all",
              {
                "bg-btn-primary text-white": user?.followings?.includes(
                  category.id
                ),
              }
            )}
            onClick={() => onClickCategory(category.id)}
          >
            {category.title}
          </button>
        ))}
      </div>
    </Modal>
  );
};

export default CategoriesModal;
