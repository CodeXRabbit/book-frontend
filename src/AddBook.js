import {useState} from "react";
import {Button, Col, Form, Input, Modal} from "antd";
import axios from "axios";

const AddBook = () => {

    const [bookName, setBookName] = useState(null);
    const [author, setAuthor] = useState(null);
    const [publishedDate, setPublishedDate] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        console.log(bookName, author, publishedDate)
        axios.post('/book/add', {bookName, author, publishedDate}).then(r => {
            setIsModalOpen(false)
        })
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const inputBookName = (name) => {
        setBookName(name.target.value)
    }

    const inputAuthor = (author) => {
        setAuthor(author.target.value)
    }

    const inputPublishedDate = (publishedDate) => {
        setPublishedDate(publishedDate.target.value)
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add
            </Button>

            <Modal title="Add new book" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>
                    book name: <input onChange={inputBookName}/>
                </p>
                <p>
                    author: <input onChange={inputAuthor}/>
                </p>
                <p>
                    publishedDate: <input onChange={inputPublishedDate}/>
                </p>
            </Modal>
        </>
    )
}

export default AddBook;