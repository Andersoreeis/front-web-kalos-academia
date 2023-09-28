import React, { useState } from 'react'
import moment from 'moment'
import { Input, Switch, Avatar, Badge, Drawer, Card, Button } from 'antd'
import { BellOutlined, UserOutlined } from '@ant-design/icons'
import { MomentDate } from '../MomentDate/MomentDate'
import 'moment/dist/locale/pt-br'
import './Header.css'
moment.locale('pt-br')
const { Search } = Input

export const Header = () => {

  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true);
  }
  const onClose = () => {
    setOpen(false);
  }

  const onSearch = (value, _e, info) => {
    console.log(info?.source, value)
  }

  const atual_day = moment().format('ll').toString()
  const format_day = atual_day.replace(' de', '')

  return (
    <div className='header_bar'>
      <Drawer title="Notificações" placement="right" onClose={onClose} open={open}>
        <Badge.Ribbon text="Importante!" color="red">
          <Card title="Uma nova reserva foi realizada" size="small">
            <div className="notification_info">
              Atenção! Parece que um aluno acabou de fazer uma nova reserva
            </div>
          </Card>
        </Badge.Ribbon>
      </Drawer>
      <div className="items_bar">
        <Search
          className='search_header'
          placeholder="Buscar funcionalidade..."
          onSearch={onSearch}
          size='large'
        />
        <div className="itens_gym">
          <Switch className='header_switch' defaultChecked />
          <div className="notification">
            <Badge style={{ backgroundColor: '#00FE91', color: '#1B1B1B' }} count={5}>
              <Avatar className='notificacoes_icon' onClick={showDrawer} style={{ backgroundColor: '#F5F7F9', color: '#D9D9D9' }} size="large" icon={<BellOutlined />} />
            </Badge>
          </div>
          <div className="data_gym">
            <Avatar style={{ backgroundColor: '#F5F7F9', color: '#D9D9D9' }} size="default" icon={<UserOutlined />} />
            <span className='gym_name'>Academia Original</span>
            <div className="date_day_div">
              <span className='date_day'>{format_day}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
