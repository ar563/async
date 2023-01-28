import { ReactNode, useState, useEffect } from "react";

export const Async = <T,>({
  action,
  children,
}: {
  action: () => Promise<T>;
  children: (data: T) => ReactNode;
}) => {
  const [asyncState, setAsyncState] = useState<{
    loading: boolean;
    error: boolean;
    data?: T;
  }>({ loading: true, error: false });

  useEffect(() => {
    action()
      .then((result) =>
        setAsyncState((asyncState) => ({
          ...asyncState,
          data: result,
          loading: false,
        }))
      )
      .catch((error: Error) => {
        setAsyncState((asyncState) => ({ ...asyncState, error: true }));
        alert(error);
      });
  }, [action]);

  return (
    <>
      {asyncState.loading && <h1>Ładowanie...</h1>}
      {asyncState.data &&
        !asyncState.loading &&
        !asyncState.error &&
        children(asyncState.data)}
    </>
  );
};
