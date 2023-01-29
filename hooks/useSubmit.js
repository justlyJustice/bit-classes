import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const useSubmit = (apiFunc) => {
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(false);
  const { push } = useRouter();

  const submit = async (
    urlParam,
    navigateTo,
    successMessage = `Submitted Successfully!`,
    resetForm
  ) => {
    setSubmitting(true);
    const res = await apiFunc(urlParam);
    setSubmitting(false);

    if (res.ok) {
      setSuccess(true);
      setData(res.data);
      toast.success(successMessage);

      if (resetForm) {
        resetForm();
      }

      if (navigateTo) {
        setTimeout(() => {
          push(navigateTo);
        }, 4000);
      }

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }

    if (!res.ok) {
      setError(true);
      console.log(res);

      toast.error(res.data.message);

      setTimeout(() => {
        setError(false);
      }, 4000);
    }

    if (!res) {
      return setSubmitting(false);
    }

    return res;
  };

  return { data, error, success, submit, submitting, status };
};

export default useSubmit;
