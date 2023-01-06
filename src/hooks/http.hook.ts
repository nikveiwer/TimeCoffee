export const useHttp = () => {
    const request = async <ReturnedType>(
        url: string,
        method: "GET" | "POST" | "PUSH" | "PULL" | "DELETE" = 'GET',
        body: any = null,
        headers: any = { 'Content-Type': 'application/json' },
    ): Promise<ReturnedType> => {
        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data as Promise<ReturnedType>;
        } catch (e) {
            throw e;
        }
    };

    return { request };
};
