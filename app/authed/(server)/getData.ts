"use server";
import { createClient } from "@/utils/supabase/server";

export const getQuiz = async ( uid: string ) => {
    return new Promise(async (resolve, reject) => {
        try {
            const supabase = createClient();
    
            const { data: userData, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('id', uid)
            .single()
    
            if (userError) {
                console.log(userError)
            }
            
            const { data: qData, error } = await supabase
            .from('questions')
            .select('*')
            .gt('id', userData.question_num)
            .order('id', { ascending: true })
    
            if (error) {
                console.log(error)
            }

            resolve(qData)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    });
}

export const getUser = async ( uid: string ) => {
    return new Promise(async (resolve, reject) => {
        try {
            const supabase = createClient();
    
            const { data: userData, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('id', uid)
            .single()
    
            if (userError) {
                console.log(userError)
            }

            resolve(userData)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    });
}

export const getLeaders = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const supabase = createClient();
    
            const { data, error } = await supabase
            .from('users')
            .select('*')
            .order('correct', { ascending: false })
    
            if (error) {
                console.log(error)
            }

            resolve(data)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    });
}