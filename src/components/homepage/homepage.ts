/* HomePage.css */

/* .home-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .home-container h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
  }
  
  .home-container p {
    text-align: center;
    color: #666;
    margin-bottom: 15px;
  }
  
  .home-container .home-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    
  }
  
  .home-container .home-buttons a {
    margin-bottom: 15px;
  }
  
  .home-container .home-buttons button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #5c6bc0;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
  }
  
  .home-container .home-buttons button:hover {
    background-color: #3f51b5;
  } */
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
export const HomeMUI = styled.div
const HomeContainer = styled(Container)(({ theme }) => ({
  maxWidth: 400,
  margin: '50px auto',
  padding: theme.spacing(2.5),
  border: '1px solid #ddd',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
}));

const HomeTitle = styled(Typography)({
  textAlign: 'center',
  color: '#333',
  marginBottom: 30,
});

const HomeParagraph = styled(Typography)({
  textAlign: 'center',
  color: '#666',
  marginBottom: 15,
});

const HomeButtons = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
  '& button': {
    width: '100%',
    padding: 10,
    border: 'none',
    borderRadius: 4,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));


