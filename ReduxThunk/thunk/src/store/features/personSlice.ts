import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Person{
    id:number;
    name:string;
}

interface PersonState{
    persons:Person[]
}

const initialState:PersonState={
    persons:[]
}

export const updatePerson = createAsyncThunk(
    "person/update",
    async ({ id, name }: { id: number; name: string }, thunkAPI) => {
        const response = await fetch(`http://localhost:3000/persons/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name })
        });
        const data: Person = await response.json();
        return data;
    }
);

export const deletePerson = createAsyncThunk(
    "person/delete",
    async (id: number, thunkAPI) => {
        await fetch(`http://localhost:3000/persons/${id}`, {
            method: "DELETE"
        });
        return id;
    }
);


export const fetchPerson = createAsyncThunk("person/fetch", async (thunkAPI)=>{
    const response = await fetch("http://localhost:3000/persons", {
        method:"GET"
    });
    const data = response.json();
    return data;
})

export const savePerson = createAsyncThunk("person/save", async (name:string, thunkAPI)=>{
    const response = await fetch("http://localhost:3000/persons", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name
        })
    });
    const data : Person = await response.json();
    const responseList = await fetch("http://localhost:3000/persons", {
        method:"GET"
    });
    const data2 = await responseList.json();
    data.id = data2.length;

    //this data use as payload to push the state
    return data;
})


export const PersonSlice = createSlice({
    name:"person",
    initialState,
    reducers:{
        addPerson:(state, action:PayloadAction<{name:string}>)=>{
            state.persons.push({
                id:state.persons.length,
                name:action.payload.name,
            })
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchPerson.fulfilled, (state, action)=>{
            state.persons = action.payload;
        })

        builder.addCase(savePerson.fulfilled, (state, action)=>{
            state.persons.push(action.payload);
        })

        builder.addCase(updatePerson.fulfilled, (state, action) => {
            const index = state.persons.findIndex(person => person.id === action.payload.id);
            if (index !== -1) {
                state.persons[index] = action.payload;
            }
        });

        builder.addCase(deletePerson.fulfilled, (state, action) => {
            state.persons = state.persons.filter(person => person.id !== action.payload);
        });
    },
})

export default PersonSlice.reducer;
export const { addPerson } = PersonSlice.actions;