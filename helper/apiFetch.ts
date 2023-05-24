interface apiFetchType {
    restApiUrl: string;
}

const apiFetch = async ({restApiUrl}: apiFetchType) => {
    try {
        const response = await fetch(restApiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
    }
};

export {apiFetch};