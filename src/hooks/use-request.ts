import { useEffect, useState } from 'react';

type IRequestResult<T> = {
    data: T;
    loading: boolean;
    error: string;
};

type IRequestOptions = {
    onSuccess?: () => void;
    onError?: (error: Error) => void;
};

export function useRequest<T, V>(
    fetcher: (variables: V) => Promise<T>,
    variables?: V,
    options?: IRequestOptions,
): IRequestResult<T> {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const res = await fetcher(variables);
            if (options?.onSuccess) options.onSuccess();
            setData(res);
        } catch (error) {
            if (options?.onError) options.onError(error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, error, loading };
}
