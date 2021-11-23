<template>
    <div class="menubar">
        <ul class="menubar-link">
            <li><router-link to='/techblog'>Home</router-link></li>
            <li><router-link to='/techblog/algorithm'>Algorithm</router-link></li>
            <li><router-link to='/techblog/development'>Development</router-link></li>
            <li><router-link to='/techblog/life'>Life</router-link></li>
        </ul>
    </div>
</template>


<script>
export default ({
    name: 'Menubar',
})
</script>

<style scoped>
.menubar {
    width: var(--width);
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    margin: 20px 40px;
}

.menubar-link {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 0;
    font-weight: 700;
}

.menubar-link li {
    display: inline-block;
    margin: 0 20px;
}

.menubar-link a {
    text-decoration-line: none;
    color: var(--green);
}
</style>
