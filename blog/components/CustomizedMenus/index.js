import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PublishIcon from '@mui/icons-material/Publish';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import FolderOffIcon from '@mui/icons-material/FolderOff';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ARTICLE_STATUS } from '../../constants/articleStatus';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            },
        },
    },
}));

export default function CustomizedMenus(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEdit = (article) => {
        setAnchorEl(null);
        props.handleEdit(article);
    };

    const handleChangeStatus = (article, status) => {
        setAnchorEl(null);
        props.handleChangeStatus(article, status);
    };

    const handleDeleteModal = (article) => {
        setAnchorEl(null);
        props.handleDeleteModal(article);
    };

    return (
        <div>
            <Button
                className="button-options"
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="outlined"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                <MoreHorizIcon />
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleEdit(props.article)} disableRipple>
                    <EditIcon />
                    Editar artículo
                </MenuItem>

                {props.article.status === ARTICLE_STATUS.PUBLISHED && (
                    <MenuItem
                        onClick={() => handleChangeStatus(props.article, ARTICLE_STATUS.PAUSED)}
                        disableRipple
                    >
                        <PauseCircleIcon />
                        Pausar artículo
                    </MenuItem>
                )}

                {props.article.status === ARTICLE_STATUS.PAUSED && (
                    <MenuItem onClick={() => handleChangeStatus(props.article, ARTICLE_STATUS.CREATED)} disableRipple>
                        <PlayCircleFilledWhiteIcon />
                        Despausar artículo
                    </MenuItem>
                )}

                {props.article.status === ARTICLE_STATUS.CREATED && (
                    <MenuItem onClick={() => handleChangeStatus(props.article, ARTICLE_STATUS.PUBLISHED)} disableRipple>
                        <PublishIcon />
                        Publicar artículo
                    </MenuItem>
                )}

                <Divider sx={{ my: 0.5 }} />

                {props.article.status === ARTICLE_STATUS.ARCHIVED && (
                    <MenuItem onClick={() => handleChangeStatus(props.article, ARTICLE_STATUS.CREATED)} disableRipple>
                        <FolderOffIcon />
                        Desarchivar artículo
                    </MenuItem>
                )}

                {(props.article.status === ARTICLE_STATUS.CREATED ||
                    props.article.status === ARTICLE_STATUS.PUBLISHED ||
                    props.article.status === ARTICLE_STATUS.PAUSED ||
                    props.article.status === ARTICLE_STATUS.DRAFT) && (
                    <MenuItem onClick={() => handleChangeStatus(props.article, ARTICLE_STATUS.ARCHIVED)} disableRipple>
                        <FolderCopyIcon />
                        Archivar artículo
                    </MenuItem>
                )}

                <MenuItem onClick={() => handleDeleteModal(props.article)} disableRipple>
                    <DeleteIcon />
                    Eliminar artículo
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
