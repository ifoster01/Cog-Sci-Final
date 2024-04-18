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

export const updateQuiz = async ( user: any, qid: number, correct: boolean ) => {
    return new Promise(async (resolve, reject) => {
        try {
            const supabase = createClient();
    
            const { data: userData, error: userError } = await supabase
            .from('users')
            .update({
                correct: correct ? user.correct + 1 : user.correct,
                incorrect: correct ? user.incorrect : user.incorrect + 1,
                total: user.total + 1,
                question_num: qid
            })
            .eq('id', user.id)
            .select('*')
            .single()

            if (userError) {
                console.log(userError)
            }

            const { data: quizData, error: quizError } = await supabase
            .from('questions')
            .select('*')
            .gt('id', userData.question_num)

            if (quizError) {
                console.log(quizError)
            }

            // construct response data
            const resData = {
                userData,
                quizData
            }

            resolve(resData)
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