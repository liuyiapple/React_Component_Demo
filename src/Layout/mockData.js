import {Space, Tag} from "antd";
import React from "react";

export const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
        render: (text) => <a>{text}</a>,
        width: 200

    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
        width: 150
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: '3',
        width: 150
    },
    {
        title: '电话',
        dataIndex: 'address',
        key: '4',
        width: 150
    }, {
        title: '学历',
        dataIndex: 'address',
        key: '5',
        width: 150
    },
    {
        title: '政治面貌',
        dataIndex: 'address',
        key: '6',
        width: 150
    },
    {
        title: 'Vue',
        dataIndex: 'address',
        key: '7',
        width: 200
    }, {
        title: 'React',
        dataIndex: 'address',
        key: '8',
        width: 200
    },
    {
        title: 'Angule',
        dataIndex: 'address',
        key: '9',
        width: 200
    },
    {
        title: 'Feacbook',
        dataIndex: 'address',
        key: '10',
        width: 200

    }, {
        title: 'Address',
        dataIndex: 'address',
        key: '11',
        width: 200,
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, {tags}) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';

                    if (tag === 'loser') {
                        color = 'volcano';
                    }

                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
        width: 200

    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
        width: 200,
        fixed: "right"
    },
];
export const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '5',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    }, {
        key: '7',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '8',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },


];