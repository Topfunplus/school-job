<script setup lang="ts">
</script>

<template>
    <div>
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-left">
                    <p>&copy; 2025 MyCompany. All rights reserved.</p>
                </div>
                <div class="footer-right">
                    <ul>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped lang="scss">
.footer {
    position: sticky;
    bottom: 0;
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-left p {
    margin: 0;
}

.footer-right ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 15px;
}

.footer-right a {
    color: white;
    text-decoration: none;
}

.footer-right a:hover {
    text-decoration: underline;
}
</style>
