import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

export default function AppRouter () {
    
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" index element={<Navigate to='/lotofacil' replace />} />
                    <Route path='/lotofacil' index element={<span>lotofacil</span>} />
                    <Route path='/megasena' element={<span>megasena</span>} />
                    <Route path='/quina' element={<span>quina</span>} />
            </Routes>
        </BrowserRouter>
    )
}