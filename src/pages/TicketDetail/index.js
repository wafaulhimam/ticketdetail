import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Modal from 'react-modal';
import Dropdown from 'react-dropdown';
import styled from 'styled-components';
import 'react-dropdown/style.css';
import { color } from '../../utils/constants';

const Row = styled.div`
    display: flex;
    ${({ justify }) => justify && `
        justify-content: ${justify};
    `}
    ${({ margin }) => margin && `
        margin: ${margin};
    `}
`;

const Col = styled.div`
    ${({ flex }) => flex && `
        flex-basis: ${flex};
    `}
    ${({ margin }) => margin && `
        margin: ${margin};
    `}
`;

const SVG = styled.svg`
    cursor: pointer;
`;

const Input = styled.input`
    width: 99%;
    font-size: 24px;
    font-family: 'Nunito', sans-serif;
    color: ${color.darkgrey};
    font-weight: 900;
`;

const P = styled.p`
    font-size: 13px;
    color: ${color.grey};
`;

const options = [
    'one', 'two', 'three'
];


const onSelect = () => {
    console.log('test ooption')
}

const StyledDropdown = styled(Dropdown)`
    .Dropdown-control {
        background-color: ${color.lightgrey};
        width: 30%;
    }
`

const StyledButton = styled.button`
    background-color: ${(props) => {
        if (props.primary) {
            return color.darkblue;
        }
        if (props.secondary) {
            return color.lightblue;
        }
    }};
    color: ${(props) => {
        if (props.primary) {
            return color.white;
        }
        if (props.secondary) {
            return color.darkblue;
        }
    }};
    border-radius: 20px;
    border: none;
    width: 114px;
    height: 46px;
    margin: 20px 0 0 20px;
    cursor: pointer;
`;

const Icon = styled.div`
    background-color: ${color.green};
    border-radius: 50%;
    width: 32px;
    height: 32px;
    text-align: center;
`;

const TextIcon = styled.div`
    color: ${color.white};
    padding-top: 5px;
`;

const TicketDetail = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
            >
                <Row justify="space-between">
                    <Col flex="80%">
                        <P>Design Tasks | One by Meja Putih</P>
                    </Col>
                    <Col flex="5%">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H24V5.33333H0V0ZM1.33333 24V6.66667H22.6667V24H1.33333ZM14.6667 14.6667V10.6667H9.33333V14.6667H5.33333L12 21.3333L18.6667 14.6667H14.6667Z" fill="#363636"/>
                        </svg>
                    </Col>
                    <Col flex="5%">
                        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 19.4403C18.9867 19.4403 18.08 19.8403 17.3867 20.467L7.88 14.9337C7.94667 14.627 8 14.3203 8 14.0003C8 13.6803 7.94667 13.3737 7.88 13.067L17.28 7.58699C18 8.25366 18.9467 8.66699 20 8.66699C21.0609 8.66699 22.0783 8.24556 22.8284 7.49542C23.5786 6.74527 24 5.72786 24 4.66699C24 3.60613 23.5786 2.58871 22.8284 1.83857C22.0783 1.08842 21.0609 0.666992 20 0.666992C18.9391 0.666992 17.9217 1.08842 17.1716 1.83857C16.4214 2.58871 16 3.60613 16 4.66699C16 4.98699 16.0533 5.29366 16.12 5.60033L6.72 11.0803C6 10.4137 5.05333 10.0003 4 10.0003C2.93913 10.0003 1.92172 10.4218 1.17157 11.1719C0.421427 11.922 0 12.9395 0 14.0003C0 15.0612 0.421427 16.0786 1.17157 16.8288C1.92172 17.5789 2.93913 18.0003 4 18.0003C5.05333 18.0003 6 17.587 6.72 16.9203L16.2133 22.4537C16.1467 22.7337 16.1067 23.027 16.1067 23.3337C16.1067 25.4803 17.8533 27.2137 20 27.2137C22.1467 27.2137 23.8933 25.4803 23.8933 23.3337C23.8933 22.3011 23.4831 21.3108 22.753 20.5807C22.0229 19.8505 21.0326 19.4403 20 19.4403Z" fill="black"/>
                        </svg>
                    </Col>
                    <Col flex="5%">
                        <SVG onClick={closeModal} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3332 2.54699L17.4532 0.666992L9.99984 8.12033L2.5465 0.666992L0.666504 2.54699L8.11984 10.0003L0.666504 17.4537L2.5465 19.3337L9.99984 11.8803L17.4532 19.3337L19.3332 17.4537L11.8798 10.0003L19.3332 2.54699Z" fill="black"/>
                        </SVG>
                    </Col>
                </Row>

                <Row justify="flex-start" margin="44px 0 24px">
                    <Col flex="60%">
                        <form>
                            <Input type="text" name="faq" />
                        </form>
                    </Col>
                    <Col flex="40%" margin="0 0 0 65px">
                    <StyledDropdown options={options} onChange={onSelect} placeholder="TO DO" />
                    </Col>
                </Row>
                
                <Row><h4>Description</h4></Row>
                <Row margin="0 0 24px">
                    <Col flex="60%">
                        <CKEditor
                            editor={ ClassicEditor }
                            data="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget pretium augue, quis ornare nisl. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>"
                            onReady={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                console.log( { event, editor, data } );
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                        <Row justify="flex-end">
                            <Col>
                                <StyledButton secondary>Cancel</StyledButton>
                            </Col>
                            <Col><StyledButton primary>Save</StyledButton></Col>
                        </Row>
                    </Col>
                    <Col flex="40%" margin="0 0 0 65px">
                        <h4>Assign to:</h4>
                    </Col>
                </Row>

                <Row>
                    <h4>Comments</h4>
                </Row>
                <Row>
                    <Col flex="5%">
                        <Icon>
                            <TextIcon>H</TextIcon>
                        </Icon>
                    </Col>
                    <Col flex="55%">
                        <Input placeholder="Add a comment..." />
                    </Col>
                </Row>
            </Modal>

        </>
    )
}


export default TicketDetail;