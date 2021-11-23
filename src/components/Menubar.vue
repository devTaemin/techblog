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
    width: 1024px;
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
}

.menubar-link li {
    display: inline-block;
    margin: 0 10px;
}

.menubar-link a {
    text-decoration-line: none;
    color: #42b983;
}
</style>
