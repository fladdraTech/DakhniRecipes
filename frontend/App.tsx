import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPassPage from './pages/ForgotPassPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import ResetPassPage from './pages/ResetPassPage';
import HomeScreen from './pages/HomeScreen';
import SearchRecipes from './pages/SearchRecipes';
import Sample from './pages/Sample';
import SavedRecipePage from './pages/SavedRecipePage';
import NotificationPage from './pages/NotificationPage';
import AccountPage from './pages/AccountPage';
import FilterPage from './pages/FilterPage';
import RecipeDescription from './pages/RecipeDescription';
import {QueryClient, QueryClientProvider} from 'react-query';
import { Text } from 'react-native';
import IngredientsList from './components/Procedure';
import RecipeCreatePage from './pages/RecipeCreatePage';
import ReviewPage from './pages/ReviewPage';
const queryClient = new QueryClient();

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="LandingPage" component={LandingPage}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SignInPage" component={SignInPage} />
          <Stack.Screen name="ForgotPassPage" component={ForgotPassPage} />
          <Stack.Screen name="VerifyEmailPage" component={VerifyEmailPage} />
          <Stack.Screen name="ResetPassPage" component={ResetPassPage} />
          <Stack.Screen name="SavedRecipePage" component={SavedRecipePage} />
          <Stack.Screen name="NotificationPage" component={NotificationPage} />
          <Stack.Screen name="AccountPage" component={AccountPage} />
          <Stack.Screen name="SignUpPage" component={SignUpPage} />
          <Stack.Screen name="Sample" component={Sample}/>
          <Stack.Screen name="SearchRecipes" component={SearchRecipes} />
          <Stack.Screen name="FilterPage" component={FilterPage} />
          <Stack.Screen name="RecipeDescription" component={RecipeDescription} />
          <Stack.Screen name="IngredientsList" component={IngredientsList} />                            
          <Stack.Screen name="RecipeCreatePage" component={RecipeCreatePage} />                            
          <Stack.Screen name="ReviewPage" component={ReviewPage} />                            
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
