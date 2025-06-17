import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, User, LogOut, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import ThemeToggle from '@/components/ThemeToggle';
import { useState } from 'react';

const Navigation: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/analysis', label: 'Analysis' }];


  if (isAuthenticated) {
    navLinks.push({ to: '/feedback', label: 'Feedback' });
  }

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50" data-id="ouyny529d" data-path="src/components/Navigation.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="9y8jb3why" data-path="src/components/Navigation.tsx">
        <div className="flex justify-between items-center h-16" data-id="yb8kzk31j" data-path="src/components/Navigation.tsx">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" data-id="1khkx37k7" data-path="src/components/Navigation.tsx">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center" data-id="ykl9v3wop" data-path="src/components/Navigation.tsx">

              <Shield className="w-4 h-4 text-white" data-id="3v2ngtjuj" data-path="src/components/Navigation.tsx" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="pkc2y9y2f" data-path="src/components/Navigation.tsx">
              Privacy Guardian
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" data-id="dzr1phggu" data-path="src/components/Navigation.tsx">
            {navLinks.map((link) =>
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMobileMenu}
              className={`text-sm font-medium transition-colors duration-200 ${
              location.pathname === link.to ?
              'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1' :
              'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`
              } data-id="gupxdwqxg" data-path="src/components/Navigation.tsx">

                {link.label}
              </Link>
            )}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-4" data-id="2i2zvqj9m" data-path="src/components/Navigation.tsx">
            <ThemeToggle data-id="1xg9lqm0g" data-path="src/components/Navigation.tsx" />
            {isAuthenticated ?
            <div className="flex items-center space-x-3" data-id="1qmfjtlna" data-path="src/components/Navigation.tsx">
                <div className="flex items-center space-x-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/50 rounded-full" data-id="9az2ozyma" data-path="src/components/Navigation.tsx">
                  <User className="w-4 h-4 text-blue-600 dark:text-blue-400" data-id="68a647ewo" data-path="src/components/Navigation.tsx" />
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-200" data-id="9dd6je77v" data-path="src/components/Navigation.tsx">
                    {user?.Name || user?.Email}
                  </span>
                </div>
                <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50 hover:border-red-300 dark:hover:border-red-700" data-id="q7kyxxeuo" data-path="src/components/Navigation.tsx">

                  <LogOut className="w-4 h-4 mr-1" data-id="h9xczmfzb" data-path="src/components/Navigation.tsx" />
                  Logout
                </Button>
              </div> :

            <div className="flex items-center space-x-2" data-id="cyzujk3pw" data-path="src/components/Navigation.tsx">
                <Link to="/login" data-id="tnuxplfaj" data-path="src/components/Navigation.tsx">
                  <Button variant="outline" size="sm" data-id="md7c7bh8d" data-path="src/components/Navigation.tsx">
                    Login
                  </Button>
                </Link>
                <Link to="/register" data-id="di11vmmnv" data-path="src/components/Navigation.tsx">
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white" data-id="31gnzkxdn" data-path="src/components/Navigation.tsx">
                    Sign Up
                  </Button>
                </Link>
              </div>
            }
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2" data-id="02buhvm7z" data-path="src/components/Navigation.tsx">
            <ThemeToggle data-id="58d4dj64b" data-path="src/components/Navigation.tsx" />
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} data-id="h8ax6u43e" data-path="src/components/Navigation.tsx">

              {isMobileMenuOpen ?
              <X className="w-4 h-4" data-id="gr1wxjjm9" data-path="src/components/Navigation.tsx" /> :

              <Menu className="w-4 h-4" data-id="85xgosev9" data-path="src/components/Navigation.tsx" />
              }
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4" data-id="vyd6uxnx0" data-path="src/components/Navigation.tsx">

            <div className="flex flex-col space-y-4" data-id="4re0pw7dz" data-path="src/components/Navigation.tsx">
              {navLinks.map((link) =>
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMobileMenu}
              className={`text-base font-medium transition-colors duration-200 ${
              location.pathname === link.to ?
              'text-blue-600 dark:text-blue-400' :
              'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`
              } data-id="lm533ox87" data-path="src/components/Navigation.tsx">

                  {link.label}
                </Link>
            )}
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700" data-id="uyr3567nb" data-path="src/components/Navigation.tsx">
                {isAuthenticated ?
              <div className="space-y-3" data-id="7ui9mzev6" data-path="src/components/Navigation.tsx">
                    <div className="flex items-center space-x-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/50 rounded-lg" data-id="ul5uftx86" data-path="src/components/Navigation.tsx">
                      <User className="w-4 h-4 text-blue-600 dark:text-blue-400" data-id="ej0fep8nz" data-path="src/components/Navigation.tsx" />
                      <span className="text-sm font-medium text-blue-800 dark:text-blue-200" data-id="ujch0z68d" data-path="src/components/Navigation.tsx">
                        {user?.Name || user?.Email}
                      </span>
                    </div>
                    <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/50 hover:border-red-300 dark:hover:border-red-700" data-id="agmvbul62" data-path="src/components/Navigation.tsx">

                      <LogOut className="w-4 h-4 mr-2" data-id="tfdyl72tp" data-path="src/components/Navigation.tsx" />
                      Logout
                    </Button>
                  </div> :

              <div className="space-y-2" data-id="9e6xwzjww" data-path="src/components/Navigation.tsx">
                    <Link to="/login" onClick={closeMobileMenu} data-id="fqsg39dpz" data-path="src/components/Navigation.tsx">
                      <Button variant="outline" className="w-full" data-id="toqr7l9ug" data-path="src/components/Navigation.tsx">
                        Login
                      </Button>
                    </Link>
                    <Link to="/register" onClick={closeMobileMenu} data-id="j55gldm50" data-path="src/components/Navigation.tsx">
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white" data-id="p12fwe6dw" data-path="src/components/Navigation.tsx">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
              }
              </div>
            </div>
          </motion.div>
        }
      </div>
    </nav>);

};

export default Navigation;