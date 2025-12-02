**React Context**
-Way of sharing data across component tree without passing props down manually at every level.
-Is our 'global state' that components can use when needed.
Example use cases: current authenticated user, theme or preferred language.


**Parts:**
1.Create the context - make a context object.
        '
        import { createContext } from 'react';
        const MyContext = createContext(defaultValue);
        <!-- defaultValue is usually 'undefined' / 'null'.
        Is what is returned when a component tries using the context outside of a Provider -->
        '
2.Provide the context - wrap app with Provider holding the data.
        '
        <MyContext.Provider value={someValue}>
            {children}
        </MyContext.Provider>
        '
3.Consume the context - use the data in any component needing it.
        '
        import { useContext } from "react";
        const value = useContext(MyContext);
        '


**Use:**
-Is kept in main.tsx as a wrapper to '<App />'.
-Our context provider will wrap our app.


**Note**
-It does not store data permanently, on refreshing the page, data disappears.
-For data persistence use:
    1.localStorage.
    2.State management libraries - Redux, Zustand etc.
-It re-renders all consumers, all components using our global state will re-render if our state changes.

1.Context - the shared data container.
2.Provider - component holding state.
3.Value - what is to be shared.
4.Consumer - component reading context.
5.useContext - hook used to get the shared data.

-Stored in own folder: context folder under 'src'

**Updating data passed via context**
-To update context, combine with state.
-Declare a state variable in the parent component and pass the current state down as the context value to the provider.


**Steps for creating a context file**
1.Create the context folder under the 'src'.
2.Create a new file, the file for our context.
3.Import the react tools needed:
        '
        import { createContext, useContext, useState, useEffect } from "react";
        '
4.Describe the data my context will hold using an interface.
        '
        Interface ContextType{
            stateName : Type;
            functionName: (args) => void;
        }
        '

Then define the functions / components our context will expose.
5.Create the context, set up our global store.
        '
        const MyContext = createContext<MyContextType | undefined>(undefined);
        '
6.Create the provider component, parent wrapping whole app.
        '
        export const MyProvider = ({children}) => {
            const [state, setState] = useState (initialValue);

            function someFunction(){
                //update state here
            }

            return (
                <MyContext.Provider value={{state, someFunction}}>
                    {children}
                </MyContext.Provider>
            );
        };
        '
-Inside our provider we define our state, state update functions, anything else we are to expose globally and will be put inside 'value={}'
7.Create a custom hook to access the context.
-When a custom hook is only for a specific context then it is put in the same file as the context.
        '
        export const useMyContext = () => {
            const context = useContext(MyContext);
            if(!context){
                throw new Error("useMyContext must be inside MyProvider)
            }
            return context;
        };
        '
-In my app I write: 
        '
        const { state, someFunction } = useMyContext();
        '
8.Wrap our app with our provider in main.tsx.
