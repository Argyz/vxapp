export const findData = (collections,id) => {
    return collections.find(element=>element.employee_id.toString()===id);
};