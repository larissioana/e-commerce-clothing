import styled from "styled-components";

const FormInput = ({label, ...otherProps}) =>
{
    return (
        <Wrapper>
            <div className="form-input">
                <label>{label}</label>
                <input {...otherProps}/>
            </div>
        </Wrapper>
    )
};

export default FormInput;

const Wrapper = styled.div`
.form-input
{
    display: grid;
}
`;