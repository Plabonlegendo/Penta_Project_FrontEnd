export interface RequestResponse {
    status: string,
    message: string,
    data: any
}

export interface PersonDto {
    id: number,
    name: string,
    phoneNo: string,
    email: string,
    departmentName: string,
    role: string
}
