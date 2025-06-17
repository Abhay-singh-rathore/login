import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    
    backgroundColor: '#f5f6fa',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical:50,
    padding:40

  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
   formContainer1: {
    
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  }, formContainer2: {
    
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  Text: {
    color: '#000',
    fontSize: 15,
    fontStyle:'bold',
    fontWeight: '800',
  },
  emtext:{
    color: '#000',
    fontSize: 10,
    fontWeight: '700',
    paddingLeft: 10,
    textAlign:'left'
    
  },

  verticalarr:{
    flexDirection: 'row',
    justifyContent: 'space-between',    
    alignItems: 'center',
    width:'100%',
    padding:20,
    marginVertical: 5,
    
    backgroundColor: '#dadada',
    borderRadius: 10,
  },
   verticalarr1:{
    flexDirection: 'column',
    justifyContent: 'space-between',    
    alignItems: 'center',
    width:'100%',
    padding:20,
    marginVertical: 5,
    
    
    borderRadius: 10,
  },

    horizontalarr:{
          flexDirection: 'column',
    justifyContent: 'space-between',    
    alignItems: 'center',
    width:'100%',
    padding:20,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#dadada',
    borderRadius: 10,
  },



  flatliststyle:{
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowOffset: { width: 0, height: 9 },
    shadowRadius: 18,
    elevation: 5,
  },
  verticalarrflat:{
      flexDirection: 'column',
    justifyContent: 'space-between',    
    alignItems: 'center',
    width:'100%',
    padding:20,
    marginVertical: 5,
    backgroundColor:"#f8f9fa",
    
    
    borderRadius: 10,
  }
});
