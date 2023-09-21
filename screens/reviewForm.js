import React from 'react';
import {StyleSheet,Button, TextInput, View} from 'react-native'
import {Formik} from 'formik'
import { runOnJS } from 'react-native-reanimated';
import * as yup from 'yup';

const reviewSchema = yup.object({
    title:yup.string()
    .required()
    .min(4),
    body: yup.string()
    .required()
    .min(8),
    rating:yup.string()
    .required()
    .test('is-num-1-5','Rating must be a number 1 - 5',(val) => {
        return parseInt(val) < 6 && parseInt(val) > 0
    }
       
    )
})

function ReviewForm({addReview}) {
    return (
        <View style={styles.container}>
            <Formik 
            validationSchema={reviewSchema}
            initialValues={{title:'',body:'',rating:''}}
            onSubmit={(values) => {
                addReview(values);

            }}
            >
                {(props) => (
                <View style={styles.modalContent}>
                    <TextInput 
                    style={styles.input}
                    placeholder='Review Title'
                    onChangeText={props.handleChange('title')}
                    value={props.values.title}
                    />

                    <TextInput 
                    multiline
                    style={styles.input}
                    placeholder='Review Body'
                    onChangeText={props.handleChange('body')}
                    value={props.values.body}
                    />

                    <TextInput 
                    style={styles.input}
                    placeholder='Rating(1-5)'
                    onChangeText={props.handleChange('rating')}
                    value={props.values.rating}
                    keyboardType='numeric'
                    />
                    <Button title="submit" color="maroon" onPress={props.handleSubmit}/>

                </View>
                    

    )}

            </Formik>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    input:{
        borderWidth:1,
        borderColor:'#333',
        padding:10,
        fontSize:18,
        marginVertical:20,
        

    },modalContent:{
        borderRadius:6,
        marginHorizontal:15,
        

    }
    
})

export default ReviewForm;