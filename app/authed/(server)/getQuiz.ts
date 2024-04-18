"use server";
import { createClient } from "@/utils/supabase/server";

export const getData = async ( uid: string ) => {
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
    
            console.log(userData)
            
            const { data: qData, error } = await supabase
            .from('questions')
            .select('*')
            .gt('id', userData.question_num)
            .order('id', { ascending: true })
    
            if (error) {
                console.log(error)
            }
    
            console.log(qData)
            
            resolve(qData)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    });
}