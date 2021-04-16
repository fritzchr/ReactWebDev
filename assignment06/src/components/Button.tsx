import styled from 'styled-components';

export default styled.button`
    background-color: #258ef7;
    color: white;
    font-size: 14px;
    margin: 20px 20px 0px 0px;
    border: none;
    border-radius: 25px;
    height: 40px;
    width: 80px;

    &:hover {
        box-shadow: 4px 4px 5px #888888;
        font-weight: bold;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        background-color: #888888;
    }
`;