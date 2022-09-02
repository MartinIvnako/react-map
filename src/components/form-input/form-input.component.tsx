export interface IFormInput {
    [otherProps: string]: any;
}

const FormInput = ({ ...otherProps }: IFormInput) => {
    return <input {...otherProps} />;
};

export default FormInput;
