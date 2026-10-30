cmake_minimum_required(VERSION 3.13)

set(CMAKE_ANDROID_STL_TYPE c++_shared)
project(appmodules)

include(${REACT_ANDROID_DIR}/cmake-utils/ReactNative-application.cmake)

foreach(autolinked_library IN LISTS AUTOLINKED_LIBRARIES)
  target_link_libraries(${autolinked_library} c++_shared)
endforeach()

target_link_libraries(${CMAKE_PROJECT_NAME} c++_shared)
