import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { useAppDispatch } from '../../redux/initStore';
import { confirmationToggle, cleanBasket } from '../../redux/slices/basketSlice';
import { useSelector } from 'react-redux';

import { milkNames } from '../coffeeCard/coffeeCard';

import { IBasketCoffee } from '../../@types/in';
import { RootState } from '../../redux/initStore';

type DialogProps = {
    open: boolean;
    handleClose: () => void;
    basketCoffees: IBasketCoffee[];
    totalSum: number;
};

const DialogModal: React.FC<DialogProps> = (props) => {
    const { open, handleClose, basketCoffees, totalSum } = props;

    const confirm = useSelector((state: RootState) => state.basket.confirmation);

    const dispatch = useAppDispatch();

    const onConfirmation = () => {
        dispatch(confirmationToggle());

        setTimeout(() => {
            handleClose();
            dispatch(cleanBasket());
        }, 7000);

        setTimeout(() => {
            dispatch(confirmationToggle());
        }, 8000);
    };

    if (!confirm) {
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{'Подтверждение заказа'}</DialogTitle>
                    <Typography
                        sx={{ marginLeft: '24px' }}
                        color={'grey'}
                        ml={1}
                        fontSize={'17px'}
                        variant="h6"
                        component="h3">
                        Вы заказали:
                    </Typography>
                    <DialogContent>
                        {
                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                {basketCoffees.map(({ imageUrl, name, milk, size }, i) => {
                                    let displayedMilk = 'Обычное';

                                    switch (milk) {
                                        case 'default':
                                            displayedMilk = milkNames[0];
                                            break;
                                        case 'grown':
                                            displayedMilk = milkNames[1];
                                            break;
                                    }

                                    return (
                                        <ListItem key={i}>
                                            <ListItemAvatar>
                                                <Avatar src={imageUrl}></Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={name}
                                                secondary={`${displayedMilk} молоко, ${size}л.`}
                                            />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        }
                        <DialogContentText id="alert-dialog-description"></DialogContentText>
                    </DialogContent>
                    <Typography
                        sx={{ marginLeft: '24px', marginTop: '15px' }}
                        color={'grey'}
                        ml={1}
                        fontSize={'17px'}
                        variant="h6"
                        component="h3">
                        Общая сумма: <span style={{ color: '#1976d2' }}>{totalSum}р.</span>
                    </Typography>
                    <DialogActions>
                        <Button onClick={handleClose}>Изменить заказ</Button>
                        <Button onClick={onConfirmation} autoFocus>
                            Подтвердить
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    } else {
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{'Ваш заказ принят!'}</DialogTitle>
                    <DialogContent>
                        <Typography
                            sx={{}}
                            color={'grey'}
                            ml={1}
                            fontSize={'17px'}
                            variant="h6"
                            component="h3">
                            К сожалению бэк хлипковат, поэтому пост запрос здесь я не делал)
                        </Typography>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
};

export default DialogModal;
