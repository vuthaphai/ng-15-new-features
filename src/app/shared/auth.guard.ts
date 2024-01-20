import { inject } from "@angular/core"
import { AuthService } from "../auth/auth.service"
import { Router } from "@angular/router"

export const AuthGuard = () => {
    const authService = inject(AuthService)
    const router = inject(Router)
    const currentUser = authService.currentUser()
    if(!currentUser){
        router.navigate(['auth'])
        return false
    }
    return true
    
}
    
