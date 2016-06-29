/**
 * Created by ����� on 28.10.2015.
 */
//�� ����� ������ �����, ��������: arr = [1,2,3,4,5].
//    �������� ������� getSums(arr), ������� ���������� ������ ��� ��������� ����.
//    ����� ������, ����� getSums(arr) ������ ���������� ����� ������ �� ������ �� ����� ���������,
// � ������� �� ������ ������� ������ ���� ����� ��������� arr �� ���� ������� ������������.
//    �� ����:
//    ��� arr = [ 1, 2, 3, 4, 5 ]
//getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
//��� ������: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].
//
//    ������� �� ������ �������������� ������� ������.
//    � ������� ����������� ����� arr.reduce.

function getSums(arr){
    var result = [];

    if(!arr.length) return result;

    var totalSum = arr.reduce(function (sum, current) {
        result.push(sum);
        return sum + current;

    });
    result.push(totalSum);
    return result;
}

var arr = [ 1, 2, 3, 4, 5 ];
console.log(getSums(arr));