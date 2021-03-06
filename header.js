
const Header = `
<header id="main-header">
    <div class="header-box">
    <!-- 로고 -->
     <h1>
         <a href="./"><img src="images/logo.png" alt="로고"></a>
    </h1>
    <!-- gnb -->
    <nav id="gnb">
        <ul class="depth1">
            <li><a href="sub1.html">회사소개</a>
                <ul class="depth2">
                    <li><a href="sub1.html">회사소개</a></li>
                    <li><a href="#">CEO 인사말</a></li>
                    <li class="pb20"><a href="#">연혁 및 조직도</a></li>
                </ul>
            </li>
            <li><a href="sub2.html">제품소개</a>
                <ul class="depth2">
                    <li><a href="sub2.html">제품정보</a></li>
                </ul>
            </li>
            <li><a href="#">정보센터</a>
                <ul class="depth2">
                    <li><a href="#">한일 News</a></li>
                    <li><a href="#">자료실</a></li>
                </ul>
            </li>
            <li><a href="#">고객센터</a>
                <ul class="depth2">
                    <li><a href="#">고객문의</a></li>
                    <li><a href="#">자주하는질문</a></li>
                    <li><a href="#">1:1 온라인문의</a></li>
                </ul>
            </li>
            <li><a href="sub3.html">오시는길</a>
                <ul class="depth2">
                    <li><a href="sub3.html">오시는길</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    <div class="search">
        <a href="#"><i class="fa fa-search"></i></a>
    </div>
</div>
</header>
`;

$('#header-asset').append(Header);