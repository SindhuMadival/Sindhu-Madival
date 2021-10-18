var i;
var arr=[2,3,4,5,7,20,19,2,78,62];
for(i=0;i<arr.length;i++)
{
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[i]==arr[j])
        {
           
            console.log(arr[i]);
        }
    }
}

