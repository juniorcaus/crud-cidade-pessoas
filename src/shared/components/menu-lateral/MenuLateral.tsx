import React from 'react';

import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { Box } from '@mui/system';
import { Home, TramSharp } from '@mui/icons-material';

interface IMenuLateralProps {
    children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();


return (
    <>
    <Drawer variant='permanent' >
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column" >

            <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center" >
                <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                src="https://i.pinimg.com/originals/f7/9b/63/f79b63eb77694f934119300ae02ee705.jpg" />     
            </Box>

            <Divider />

            <Box flex={1}>
                <List component="nav">
                    <ListItemButton>
                        <ListItemIcon>
                            <Icon> <Home/> </Icon>
                        </ListItemIcon>
                        <ListItemText primary="Página inicial" />
                    </ListItemButton>
                </List>
            </Box>


        </Box>
     </Drawer>

        <Box height="100vh" marginLeft={theme.spacing(28)} >
         {children}
        </Box>
    </>
    );
}; 