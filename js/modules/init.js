export async function initEmployees() {
    try {
        const response = await fetch('../data/employees.json');
        const dataEmployees = await response.json();
        return dataEmployees
    } catch (error) {
        console.error(error);
    }    
}
