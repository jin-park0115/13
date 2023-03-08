$(document).ready(function(){
    //버튼 액티브 추가 제거 해보기
    $('.btn li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        // 탭메뉴 연결하기
        const result= $(this).attr('data-alt');

        $('.tabs div').removeClass('active');
        // $('#' + result).addClass('active');
        $(`#${result}`).addClass(`active`);
    });
});