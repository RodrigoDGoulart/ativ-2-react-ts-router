import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Megasena from "./pages/Megasena";

export default function AppRouter () {
    
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" index element={<Navigate to='/lotofacil' replace />} />
                    <Route path='/lotofacil' index element={<span>lotofacil</span>} />
                    <Route path='/megasena' element={<Megasena />} />
                    <Route path='/quina' element={<span>quina</span>} />tg
            </Routes>
        </BrowserRouter>
    )
}