'use client'
import React, { useEffect, useState } from 'react';
import { HomeOutlined, GlobalOutlined, TeamOutlined, VideoCameraOutlined, RocketOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useRouter } from 'next/navigation'

const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: 'Characters',
        key: 'characters',
        icon: <TeamOutlined />,
    },
    {
        label: 'Movies',
        key: 'movies',
        icon: <VideoCameraOutlined />,
        // children: [
        //   {
        //     type: 'group',
        //     label: 'Item 1',
        //     children: [
        //       {
        //         label: 'Option 1',
        //         key: 'setting:1',
        //       },
        //       {
        //         label: 'Option 2',
        //         key: 'setting:2',
        //       },
        //     ],
        //   },
        //   {
        //     type: 'group',
        //     label: 'Item 2',
        //     children: [
        //       {
        //         label: 'Option 3',
        //         key: 'setting:3',
        //       },
        //       {
        //         label: 'Option 4',
        //         key: 'setting:4',
        //       },
        //     ],
        //   },
        // ],
    },
    {
        label: 'Starships',
        key: 'starships',
        icon: <RocketOutlined />,
    },
    {
        label: 'Planets',
        key: 'planets',
        icon: <GlobalOutlined />,
    },
    //   {
    //     label: (
    //       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
    //         Navigation Four - Link
    //       </a>
    //     ),
    //     key: 'alipay',
    //   },
];

const Navbar: React.FC = () => {
    const [current, setCurrent] = useState<string>('');
    const router = useRouter()

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key)
        if(e.key == 'home'){
            router.push('/')
        }else{
            router.push(`/${e.key}`)
        }
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
            style={{ position: 'fixed', width: '100%', zIndex: 10, paddingLeft: '6rem' }}
        />
    )
}

export default Navbar