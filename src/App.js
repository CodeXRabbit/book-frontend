import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React from "react";
import {Avatar, Button, Table} from "antd";
import {Container} from "./Container";
import Footer from "./Footer";
import {deleteOne} from "./studentClient";

function App() {

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get("book/getAll").then((response) => {
            setPost(response.data)
        })
    }, [])

    if (!post) {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
    const columns = [
        {
            title: 'avatar',
            key: 'avatar',
            render: (text, book) => (
                <Avatar size='large'>
                    {`${book.bookName.charAt(0).toUpperCase()}`}
                </Avatar>
            )
        },
        {
            title: 'bookId',
            dataIndex: 'bookId',
            key: 'bookId'
        },
        {
            title: 'bookName',
            dataIndex: 'bookName',
            key: 'bookName'
        },
        {
            title: 'author',
            dataIndex: 'author',
            key: 'author'
        },
        {
            title: 'publishedDate',
            dataIndex: 'publishedDate',
            key: 'publishedDate'
        },
        {
            title: 'delete',
            key: 'delete',
            render: (_, record) => (
                <Button type="primary" danger onClick={() => deleteOne(record.bookId)}>
                    delete
                </Button>
            )
        }
    ]
    return (
        <Container>
            <Table dataSource={post} columns={columns} rowKey='bookId'/>
            <Footer></Footer>
        </Container>
    )
}


export default App;
