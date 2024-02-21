import NavItem from "./NavItem";
import { DashboardOutlined,StepForwardOutlined } from '@ant-design/icons';

function Navigation() {
  return (
   <div className="navigation">
        <img src="logo.png" />
        <NavItem txt={'Overview'} >
            <DashboardOutlined />
        </NavItem>
        <NavItem txt={'leave'} >
            <StepForwardOutlined />
        </NavItem>
        <NavItem txt={'overview'} >
            <DashboardOutlined />
        </NavItem>
        <NavItem txt={'overview'} >
            <DashboardOutlined />
        </NavItem>
        <NavItem txt={'overview'} >
            <DashboardOutlined />
        </NavItem>
        <NavItem txt={'overview'} >
            <DashboardOutlined />
        </NavItem>
        <NavItem txt={'overview'} >
            <DashboardOutlined />
        </NavItem>
        <NavItem txt={'overview'} >
            <DashboardOutlined />
        </NavItem>
        <NavItem txt={'overview'} >
            <DashboardOutlined />
        </NavItem>

   </div>

  );
}

export default Navigation;