a=[1,2,3,[4,5,6,[7,8,9,[0]]]];
b=[];
function Vector(array)
{
    for (var i = 0; i < array.length; i++) {
        if (typeof(array[i]) == 'object') { 
            Vector(array[i]);
        } else if(array[i].length!=0){
            b.push(array[i]);
        }
    }
}

Vector(a);
