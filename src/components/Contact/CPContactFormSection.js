import React from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const CPContactFormSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(
      yup
        .object()
        .shape({
          name: yup.string().required(),
          email: yup.string().email().required(),
          website: yup.string(),
          message: yup.string().required().min(3)
        })
        .required()
    )
  });

  const onSubmit = async (values) => {
    try {
      const response = await emailjs.send(
        'contact-us-form',
        'template_vpkh5co',
        values,
        'N2AUZ6VF6SnEpjI_s'
      );

      console.log('SUCCESS!', response.status, response.text);
      toast.success('Message sent, thank you');

      reset();
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  return (
    <div className="contact-area">
      <div className="container">
        <div
          className="contact-bg pt-90 pb-70"
          style={{ backgroundImage: `url(${'assets/img/bg/bg18.jpg'})` }}>
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-title text-center mb-35">
                <h1>Leave a Message</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-wrapper mb-30">
                <form id="contact-us-form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <input
                        name="name"
                        placeholder="Name :"
                        type="text"
                        {...register('name', { required: true })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="name"
                        render={({ message }) => (
                          <span style={{ color: '#f43d33', marginTop: '-10px' }}>{message}</span>
                        )}
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <input
                        name="email"
                        placeholder="Email :"
                        type="email"
                        {...register('email', { required: true })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => (
                          <span style={{ color: '#f43d33', marginTop: '-10px' }}>{message}</span>
                        )}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12">
                      <input
                        name="website"
                        placeholder="Website :"
                        type="text"
                        {...register('website')}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="website"
                        render={({ message }) => (
                          <span style={{ color: '#f43d33', marginTop: '-10px' }}>{message}</span>
                        )}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12">
                      <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder="Write your message :"
                        {...register('message', { required: true })}
                      />
                      <ErrorMessage
                        errors={errors}
                        name="message"
                        render={({ message }) => (
                          <span style={{ color: '#f43d33', marginTop: '-10px' }}>{message}</span>
                        )}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12">
                      <div className="contact-button text-center">
                        <button className="btn" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPContactFormSection;
