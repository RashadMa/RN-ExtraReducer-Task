import React, { useEffect } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../App'
import { deleteCustomer, getAllCustomers } from '../redux/store/customerSlice'

const Main = () => {

      let dispatch = useDispatch<AppDispatch>()

      let { CustomerReducer } = useSelector<RootState, any>(state => state);

      useEffect(() => {
            dispatch(getAllCustomers())
      }, [])

      const deleteCustomers = (item: any) => {
            dispatch(deleteCustomer(item))
      }

      const renderItem = ({ item }: any) => {
            return <TouchableOpacity onPress={() => deleteCustomers(item)}>
                  <Text style={{ fontSize: 30 }}>{item.contactName}</Text>
            </TouchableOpacity>
      }
      console.log(CustomerReducer, 'data');

      return (
            <SafeAreaView>
                  <Text style={{ fontSize: 50 }}>{CustomerReducer.error.toString()}</Text>
                  {
                        CustomerReducer.loading ? <Text style={{ fontSize: 30 }}>Loading...</Text> : <FlatList
                              data={CustomerReducer.customers}
                              renderItem={renderItem}
                        />
                  }
            </SafeAreaView>
      )
}

export default Main

const styles = StyleSheet.create({})