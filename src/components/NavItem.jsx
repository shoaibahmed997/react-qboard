import { Button, Flex } from 'antd';
import { DashboardOutlined } from '@ant-design/icons';


function NavItem({txt,children}){
    return(
        <div>
            <Button style={{width:"100%",height:"50px",fontSize:"20px"}} size='large' type="text">
                 {children} {txt}
                 </Button>
        </div>
    )
}

export default NavItem