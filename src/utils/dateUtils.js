export const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString("en-US",{
        month:"2-digit",
        day:"2-digit",
        year:"numeric"
    });
};