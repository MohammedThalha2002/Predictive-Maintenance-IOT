using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using Vuforia;

public class getData : MonoBehaviour
{
    InputField temperature;
    // Start is called before the first frame update
    void Start()
    {
        temperature = GameObject.Find("InputTemperature").GetComponent<InputField>();
        temperature.text = "Hello";
        InvokeRepeating("fetchData", 3, 3f);
    }

    void fetchData(){
        
    }

    
}


// using System.Collections;
// using UnityEngine;
// using UnityEngine.UI;
// using UnityEngine.Networking;
// using Vuforia;

// public class click : MonoBehaviour
// {
//     InputField field;
//     InputField Hum;
//     public VirtualButtonBehaviour Vb_on;
 
//     void Start()
//     {
//         field = GameObject.Find("TextInputField").GetComponent<InputField>();
        
//         Hum = GameObject.Find("InputField1").GetComponent<InputField>();

//         Vb_on.RegisterOnButtonPressed(OnButtonPressed_on);
//         // GameObject.Find("GetButton").GetComponent<Button>().onClick.AddListener(GetData);
//     }

//     public void OnButtonPressed_on(VirtualButtonBehaviour Vb_on)
//     {
//         GetData_tem();
//         GetData_hum();
//         Debug.Log("Click");
//     }
 
//     void GetData_tem() => StartCoroutine(GetData_Coroutine1());
//     void GetData_hum() => StartCoroutine(GetData_Coroutine());
 
//     IEnumerator GetData_Coroutine1()
//     {
//         Debug.Log("Getting Data");
//         field.text = "Loading...";
//         string uri = "http://blynk-cloud.com/vKqIp55UdG2GoZcvY3un4sPyQpoxgnG3/get/v0";
//         using(UnityWebRequest request = UnityWebRequest.Get(uri))
//         {
//             yield return request.SendWebRequest();
//             if (request.isNetworkError || request.isHttpError)
//                 field.text = request.error;
//             else
//             {

//                 field.text = request.downloadHandler.text;
//                 field.text = field.text.Substring(2,2);
//             }
//         }
//     }
//     IEnumerator GetData_Coroutine()
//     {
//         Debug.Log("Getting Data");
//         Hum.text = "Loading...";
//         string uri = "http://blynk-cloud.com/vKqIp55UdG2GoZcvY3un4sPyQpoxgnG3/get/v1";
//         using(UnityWebRequest request = UnityWebRequest.Get(uri))
//         {
//             yield return request.SendWebRequest();
//             if (request.isNetworkError || request.isHttpError)
//                 Hum.text = request.error;
//             else
//             {

//                 Hum.text = request.downloadHandler.text;
//                 Hum.text = Hum.text.Substring(2,2);
//             }
//         }
//     }
// }

// FOR RUNNING A FUNCTION ON REGULAR INTERVAL

// void Start()
// {
//     // Wait for 3 seconds then trigger My Function every 0.5 seconds.
//     InvokeRepeating("MyFunction", 3, 0.5f);
// }

// void MyFunction()
// {
//     // Do something!
// }