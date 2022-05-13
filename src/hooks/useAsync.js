import { useEffect } from "react";

export const useAsync = (
  setLoading,
  asyncFn,
  successFn,
  errorFn,
  dependencies = []
) => {
  useEffect(() => {
    setLoading(true);

    let isActive = true;

    asyncFn()
      .then((result) => {
        isActive && successFn(result);
      })
      .catch((error) => {
        isActive && errorFn && errorFn(error);
      })
      .finally(() => {
        isActive && setLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, dependencies); //eslint-disable-line
};
