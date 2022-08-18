<template>
    <div class="container top-margin">
        <div>
            <p>홈</p>
        </div>
        <!-- <div> -->
        <!-- <span>날짜순</span>
            <div class="boundaryLine"></div>
            <span>북마크순</span>
            <div class="boundaryLine"></div>
            <span>하트순</span> -->
        <!-- </div> -->
        <div>
            <div>
                <div class="containerBox">
                    <div>
                        <p>오늘의 다이어리를 작성해 보세요!</p>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div>
                            <div class="icon"></div>
                            <div class="icon"></div>
                            <div class="icon"></div>
                            <div class="icon"></div>
                        </div>
                        <button>작성완료</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <div class="tagBox">
                    <div>
                        <p>검색어 필터</p>
                    </div>
                    <div>
                        <div>
                            <span class="iconX">X</span>
                            <p>공부</p>
                            <span class="iconX">X</span>
                            <p>페스티벌</p>
                            <span class="iconX">X</span>
                            <p>페스티벌</p>
                        </div>
                        <div>
                            <div>
                                <div class="tagSearch">
                                    <p>관심있는 태그 선택</p>
                                    <div class="iconPlus">+</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style lang="sass" scoped>
.icon
    width: 20px
    height: 20px
    border-radius: 50%
    background-color: lightgrey

.tagSearch
    background-color: white
</style>