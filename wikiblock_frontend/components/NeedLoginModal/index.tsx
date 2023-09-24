/* eslint-disable @next/next/no-img-element */
import { Button, SocialButton } from '@components/Button';
import { useLoginMutation } from '@features/auth/auth.service';
import { setUser } from '@features/auth/auth.slice';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '@hooks/app';
import { saveToken } from '@utils/cookies';
import { Input, Modal } from 'antd';
import Link from 'next/link';
import { FC, useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import styled from 'styled-components';
import * as Yup from 'yup';

interface LoginProps {
  onClose: () => void;
}

const Login: FC<LoginProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation('common');
  const [login, { data, error, isError, isLoading }] = useLoginMutation();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const schema = useMemo(() => {
    return Yup.object().shape({
      username: Yup.string()
        .required(t('form.username.require'))
        .trim()
        .min(3, t('form.username.minlength'))
        .max(25, t('form.username.maxlength')),
      password: Yup.string().required(t('form.password.require')),
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, // min 8 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet and 1 Number
      //   t("form.password.rule")
      // ),
    });
  }, []);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (data) {
      const { user, tokens } = data;
      if (user) dispatch(setUser(user));
      if (tokens) saveToken('access_token', tokens.access_token, Date.now() + tokens.expires_in);
      onClose();
    }
  }, [data]);

  useEffect(() => {
    if (isError && error && error.message) setErrorMessage(error.message);
  }, [isError, error]);

  const onSubmit = (data: any) => {
    login({ username: data.username, password: data.password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errorMessage && <p className="text-[#e02020]">{errorMessage}</p>}
        <div className="mb-[10px]">
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <InputText size="large" placeholder="Username" prefix={<AiOutlineUser size={20} />} {...field} />
            )}
          />
          {errors.username && <p className="text-[#e02020]">{errors.username.message}</p>}
        </div>
        <div className="mb-[10px]">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <InputText
                size="large"
                type="password"
                placeholder="Password"
                prefix={<RiLockPasswordLine />}
                {...field}
              />
            )}
          />
          {errors.password && <p className="text-[#e02020]">{errors.password.message}</p>}
        </div>
        <div>
          <Button
            className="min-h-[50px] w-full bg-[#4992d6] text-white hover:opacity-[0.8] transition-all rounded-[2px]"
            type="submit"
            loading={isLoading}
          >
            <span className="text-[15px]">{t('need_login_modal.login')}</span>
          </Button>
          <p className="text-center mt-[10px]">
            {t('need_login_modal.or')}{' '}
            <Link href={'#'}>
              <a className="text-[#254d8e]">{t('need_login_modal.forgot_password')}</a>
            </Link>
          </p>
        </div>
      </form>
      <div className="mt-[10px]">
        <SocialButton
          title="Continue with Google"
          size="large"
          prefixIcon={<img src="/images/google.png" alt="" className="w-[26px] h-[26px] object-cover" />}
        />
      </div>
      <div className="mt-[20px]">
        <p className="text-center">
          {t('need_login_modal.dont_have_account')}{' '}
          <Link href="/sign-up">
            <a className="text-[#254d8e] font-bold">{t('need_login_modal.sign_up')}</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

const SignUp = () => {
  return <div></div>;
};

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const NeedLoginModal: FC<Props> = ({ visible, onClose }) => {
  const { t } = useTranslation('common');
  const [isLoginModal, setIsLoginModal] = useState(true);
  return (
    <Modal title={t('need_login_modal.title')} visible={visible} footer={null} width={400} closable onCancel={onClose}>
      {isLoginModal ? <Login onClose={onClose} /> : <SignUp />}
    </Modal>
  );
};

const InputText = styled(Input)`
  min-height: 50px;
`;
