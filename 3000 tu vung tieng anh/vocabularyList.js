const vocabularyList = [
    {
        word: 'Attractive',
        meaning: 'Quyến rũ, hấp dẫn',
        pronounce: '/əˈtræktɪv/',
        Types_of_words: 'adj',
    },
    {
        word: 'Beautiful',
        meaning: 'Xinh đẹp, đẹp',
        pronounce: '/ˈbjutəfəl/',
        Types_of_words: 'adj',
    },
    {
        word: 'Body shape',
        meaning: 'Vóc dáng, thân hình',
        pronounce: 'ˈbɑdi ʃeɪp',
        Types_of_words: 'noun',
    },
    {
        word: 'Charming',
        meaning: 'Quyến rũ, thu hút',
        pronounce: '/ˈʧɑrmɪŋ/',
        Types_of_words: 'adj',
    },
    {
        word: 'Cute',
        meaning: 'Đáng yêu, dễ thương',
        pronounce: '/kjut/',
        Types_of_words: 'adj',
    },
    {
        word: 'Fat',
        meaning: 'Thừa cân, béo',
        pronounce: '/fæt/',
        Types_of_words: 'adj',
    },
    {
        word: 'Feature',
        meaning: 'Đặc điểm, nét nổi bật',
        pronounce: '/ˈfiʧər/',
        Types_of_words: 'noun',
    },
    {
        word: 'Fit',
        meaning: 'Cân đối, gọn gàng',
        pronounce: '/fɪt/',
        Types_of_words: 'adj',
    },
    {
        word: 'Good-looking',
        meaning: 'Ưa nhìn, sáng sủa',
        pronounce: '/gʊd-ˈlʊkɪŋ/',
        Types_of_words: 'adj',
    },
    {
        word: 'Handsome',
        meaning: 'Đẹp trai',
        pronounce: '/gʊd-ˈlʊkɪŋ/',
        Types_of_words: 'adj',
    },
    {
        word: 'Height',
        meaning: 'Chiều cao',
        pronounce: '/haɪt/',
        Types_of_words: 'noun',
    },
    {
        word: 'Look',
        meaning: 'Vẻ ngoài',
        pronounce: '/lʊk/',
        Types_of_words: 'noun',
    },
    {
        word: 'Lovely',
        meaning: 'Đáng yêu',
        pronounce: '/ˈlʌvli/',
        Types_of_words: 'adj',
    },
    {
        word: 'Muscular',
        meaning: 'Cơ bắp, lực lưỡng',
        pronounce: '/ˈmʌskjələr/',
        Types_of_words: 'adj',
    },
    {
        word: 'Pretty',
        meaning: 'Xinh xắn',
        pronounce: '/ˈprɪti/',
        Types_of_words: 'adj',
    },
    {
        word: 'Short',
        meaning: 'Thấp',
        pronounce: '/ʃɔrt/',
        Types_of_words: 'adj',
    },
    {
        word: 'Tall',
        meaning: 'Cao',
        pronounce: '/tɔl/',
        Types_of_words: 'adj',
    },
    {
        word: 'Thin',
        meaning: 'Gầy',
        pronounce: '/θɪn/',
        Types_of_words: 'adj',
    },
    {
        word: 'Ugly',
        meaning: 'Xấu xí',
        pronounce: '/ˈʌgli/',
        Types_of_words: 'adj',
    },
    {
        word: 'Weight',
        meaning: 'Cân nặng',
        pronounce: '/weɪt/',
        Types_of_words: 'noun',
    },
    {
        word: 'Arm',
        meaning: 'Cánh tay',
        pronounce: '/ɑrm/',
        Types_of_words: 'noun',
    },
    {
        word: 'Back',
        meaning: 'Lưng',
        pronounce: '/bæk/',
        Types_of_words: 'noun',
    },
    {
        word: 'Belly',
        meaning: 'Bụng',
        pronounce: '/ˈbɛli/',
        Types_of_words: 'noun',
    },
    {
        word: 'Blood',
        meaning: 'Máu',
        pronounce: '/blʌd/',
        Types_of_words: 'noun',
    },
    {
        word: 'Body',
        meaning: 'Cơ thể',
        pronounce: '/ˈbɑdi/',
        Types_of_words: 'noun',
    },
    {
        word: 'Body part',
        meaning: 'Bộ phận cơ thể',
        pronounce: '/ˈbɑdi pɑrt/',
        Types_of_words: 'noun',
    },
    {
        word: 'Bone',
        meaning: 'Xương',
        pronounce: '/boʊn/',
        Types_of_words: 'noun',
    },
    {
        word: 'Bottom',
        meaning: 'Mông',
        pronounce: '/ˈbɑtəm/',
        Types_of_words: 'noun',
    },
    {
        word: 'Brain',
        meaning: 'Não',
        pronounce: '/breɪn/',
        Types_of_words: 'noun',
    },
    {
        word: 'Chest',
        meaning: 'Ngực, lồng ngực',
        pronounce: '/ʧɛst/',
        Types_of_words: 'noun',
    },
    {
        word: 'Ear',
        meaning: 'Tai',
        pronounce: '/ɪr/',
        Types_of_words: 'noun',
    },
    {
        word: 'Eye',
        meaning: 'Mắt',
        pronounce: '/aɪ/',
        Types_of_words: 'noun',
    },
    {
        word: 'Face',
        meaning: 'Khuôn mặt',
        pronounce: '/feɪs/',
        Types_of_words: 'noun',
    },
    {
        word: 'Finger',
        meaning: 'Ngón tay',
        pronounce: '/ˈfɪŋgər/',
        Types_of_words: 'noun',
    },
    {
        word: 'Foot',
        meaning: 'Bàn chân',
        pronounce: '/fʊt/',
        Types_of_words: 'noun',
    },
    {
        word: 'Hair',
        meaning: 'Tóc',
        pronounce: '/hɛr/',
        Types_of_words: 'noun',
    },
    {
        word: 'Hand',
        meaning: 'Bàn tay',
        pronounce: '/hænd/',
        Types_of_words: 'noun',
    },
    {
        word: 'Head',
        meaning: 'Đầu',
        pronounce: '/hɛd/',
        Types_of_words: 'noun',
    },
    {
        word: 'Heart',
        meaning: 'Trái tim',
        pronounce: '/hɑrt/',
        Types_of_words: 'noun',
    },
    {
        word: 'Hip',
        meaning: 'Hông',
        pronounce: '/hɪp/',
        Types_of_words: 'noun',
    },
    {
        word: 'Leg',
        meaning: 'Chân',
        pronounce: '/lɛg/',
        Types_of_words: 'noun',
    },
    {
        word: 'Lip',
        meaning: 'Môi',
        pronounce: '/lɪp/',
        Types_of_words: 'noun',
    },
    {
        word: 'Mouth',
        meaning: 'Miệng',
        pronounce: '/maʊθ/',
        Types_of_words: 'noun',
    },
    {
        word: 'Neck',
        meaning: 'Cổ',
        pronounce: '/nɛk/',
        Types_of_words: 'noun',
    },
    {
        word: 'Nose',
        meaning: 'Mũi',
        pronounce: '/noʊz/',
        Types_of_words: 'noun',
    },
    {
        word: 'Shoulder',
        meaning: 'Vai',
        pronounce: '/ˈʃoʊldər/',
        Types_of_words: 'noun',
    },
    {
        word: 'Skin',
        meaning: 'Làn da',
        pronounce: '/skɪn/',
        Types_of_words: 'noun',
    },
    {
        word: 'Thigh',
        meaning: 'Đùi',
        pronounce: '/θaɪ/',
        Types_of_words: 'noun',
    },
    {
        word: 'Toe',
        meaning: 'Ngón chân',
        pronounce: '/toʊ/',
        Types_of_words: 'noun',
    },
    {
        word: 'Tongue',
        meaning: 'Lưỡi',
        pronounce: '/tʌŋ/',
        Types_of_words: 'noun',
    },
    {
        word: 'Tooth',
        meaning: 'Răng',
        pronounce: '/tuθ/',
        Types_of_words: 'noun',
    },
    {
        word: 'Waist',
        meaning: 'Vòng eo, eo',
        pronounce: '/weɪst/',
        Types_of_words: 'noun',
    },
    {
        word: 'Brave',
        meaning: 'Can đảm, dũng cảm',
        pronounce: '/breɪv/',
        Types_of_words: 'adj',
    },
    {
        word: 'Cheerful',
        meaning: 'Sôi nổi, vui tươi',
        pronounce: '/ˈʧɪrfəl/',
        Types_of_words: 'adj',
    },
    {
        word: 'Clever',
        meaning: 'Thông minh, khôn khéo',
        pronounce: '/ˈklɛvər/',
        Types_of_words: 'adj',
    },
    {
        word: 'Confident',
        meaning: 'Tự tin',
        pronounce: '/ˈkɑnfədənt/',
        Types_of_words: 'adj',
    },
    {
        word: 'Easy-going',
        meaning: 'Thoải mái',
        pronounce: '/ˈizi-ˈgoʊɪŋ/',
        Types_of_words: 'adj',
    },
    {
        word: 'Energetic',
        meaning: 'Tràn đầy năng lượng',
        pronounce: '/ɛnərˈʤɛtɪk/',
        Types_of_words: 'adj',
    },
    {
        word: 'Friendly',
        meaning: 'Thân thiện',
        pronounce: '/ˈfrɛndli/',
        Types_of_words: 'adj',
    },
    {
        word: 'Funny',
        meaning: 'Hài hước, vui tính',
        pronounce: '/ˈfʌni/',
        Types_of_words: 'adj',
    },
    {
        word: 'Generous',
        meaning: 'Hào phóng',
        pronounce: '/ˈʤɛnərəs/',
        Types_of_words: 'adj',
    },
    {
        word: 'Grumpy',
        meaning: 'Cáu kỉnh, khó chịu',
        pronounce: '/ˈgrʌmpi/',
        Types_of_words: 'adj',
    },
    {
        word: 'Hard-working',
        meaning: 'Siêng năng, chăm chỉ',
        pronounce: '/hɑrd-ˈwɜrkɪŋ/',
        Types_of_words: 'adj',
    },
    {
        word: 'Honest',
        meaning: 'Thật thà, trung thực',
        pronounce: '/ˈɑnəst/',
        Types_of_words: 'adj',
    },
    {
        word: 'Kind',
        meaning: 'Tử tế, tốt bụng',
        pronounce: '/kaɪnd/',
        Types_of_words: 'adj',
    },
    {
        word: 'Lazy',
        meaning: 'Lười biếng',
        pronounce: '/ˈleɪzi/',
        Types_of_words: 'adj',
    },
    {
        word: 'Loyal',
        meaning: 'Trung thành',
        pronounce: '/ˈlɔɪəl/',
        Types_of_words: 'adj',
    },
    {
        word: 'Nice',
        meaning: 'Tốt',
        pronounce: '/naɪs/',
        Types_of_words: 'adj',
    },
    {
        word: 'Polite',
        meaning: 'Lịch sự, lễ phép',
        pronounce: '/pəˈlaɪt/',
        Types_of_words: 'adj',
    },
    {
        word: 'Quiet',
        meaning: 'Im lặng, trầm tính',
        pronounce: '/ˈkwaɪət/',
        Types_of_words: 'adj',
    },
    {
        word: 'Selfish',
        meaning: 'Ích kỷ',
        pronounce: '/ˈsɛlfɪʃ/',
        Types_of_words: 'adj',
    },
    {
        word: 'Shy',
        meaning: 'Nhút nhát, rụt rè',
        pronounce: '/ʃaɪ/',
        Types_of_words: 'adj',
    },
    {
        word: 'Afraid',
        meaning: 'Lo sợ, sợ hãi',
        pronounce: '/əˈfreɪd/',
        Types_of_words: 'adj',
    },
    {
        word: 'Angry',
        meaning: 'Tức giận, giận dữ',
        pronounce: '/ˈæŋgri/',
        Types_of_words: 'adj',
    },
    {
        word: 'Bored',
        meaning: 'Chán nản',
        pronounce: '/bɔrd/',
        Types_of_words: 'adj',
    },
    {
        word: 'Confused',
        meaning: 'Bối rối, lúng túng',
        pronounce: '/kənˈfjuzd/',
        Types_of_words: 'adj',
    },
    {
        word: 'Disappointed',
        meaning: 'Thất vọng',
        pronounce: '/ˌdɪsəˈpɔɪntɪd/',
        Types_of_words: 'adj',
    },
    {
        word: 'Disgusted',
        meaning: 'Kinh tởm',
        pronounce: '/dɪsˈgʌstɪd/',
        Types_of_words: 'noun',
    },
    {
        word: 'Embarrassed',
        meaning: 'Xấu hổ, ngại ngùng',
        pronounce: '/ɪmˈbɛrəst/',
        Types_of_words: 'adj',
    },
    {
        word: 'Excited',
        meaning: 'Hứng thú, hào hứng',
        pronounce: '/ɪkˈsaɪtəd/',
        Types_of_words: 'adj',
    },
    {
        word: 'Fear',
        meaning: 'Nỗi sợ hãi',
        pronounce: '/fɪr/',
        Types_of_words: 'adj',
    },
    {
        word: 'Guilty',
        meaning: 'Cảm thấy tội lỗi',
        pronounce: '/ˈgɪlti/',
        Types_of_words: 'adj',
    },
    {
        word: 'Happy',
        meaning: 'Vui vẻ, hạnh phúc',
        pronounce: '/ˈhæpi/',
        Types_of_words: 'adj',
    },
    {
        word: 'Hungry',
        meaning: 'Đói',
        pronounce: '/ˈhʌŋgri/',
        Types_of_words: 'adj',
    },
    {
        word: 'Lonely',
        meaning: 'Cô đơn',
        pronounce: '/ˈloʊnli/',
        Types_of_words: 'adj',
    },
    {
        word: 'Nervous',
        meaning: 'Lo lắng',
        pronounce: '/ˈnɜrvəs/',
        Types_of_words: 'adj',
    },
    {
        word: 'Sad',
        meaning: 'Buồn bã',
        pronounce: '/sæd/',
        Types_of_words: 'adj',
    },
    {
        word: 'Sick',
        meaning: 'Ốm yếu, ốm',
        pronounce: '/sɪk/',
        Types_of_words: 'adj',
    },
    {
        word: 'Surprised',
        meaning: 'Ngạc nhiên',
        pronounce: '/sərˈpraɪzd/',
        Types_of_words: 'adj',
    },
    {
        word: 'Thirsty',
        meaning: 'Khát',
        pronounce: '/ˈθɜrsti/',
        Types_of_words: 'adj',
    },
    {
        word: 'Tired',
        meaning: 'Mệt mỏi',
        pronounce: '/ˈtaɪərd/',
        Types_of_words: 'adj',
    },
    {
        word: 'Worried',
        meaning: 'Lo lắng',
        pronounce: '/ˈwɜrid/',
        Types_of_words: 'adj',
    },
    {
        word: 'Applaud',
        meaning: 'Vỗ tay, tán thưởng',
        pronounce: '/əˈplɔd/',
        Types_of_words: 'verb',
    },
    {
        word: 'Art',
        meaning: 'Nghệ thuật',
        pronounce: '/ɑrt/',
        Types_of_words: 'noun',
    },
    {
        word: 'Artist',
        meaning: 'Nghệ sĩ',
        pronounce: '/ˈɑrtɪst/',
        Types_of_words: 'noun',
    },
    {
        word: 'Artwork',
        meaning: 'Tác phẩm nghệ thuật',
        pronounce: '/ˈɑrˌtwɜrk/',
        Types_of_words: 'noun',
    },
    {
        word: 'Audience',
        meaning: 'Khán giả',
        pronounce: '/ˈɔdiəns/',
        Types_of_words: 'noun',
    },
    {
        word: 'Author',
        meaning: 'Tác giả',
        pronounce: '/ˈɔθər/',
        Types_of_words: 'noun',
    },
    {
        word: 'Band',
        meaning: 'Ban nhạc',
        pronounce: '/bænd/',
        Types_of_words: 'noun',
    },
    {
        word: 'Brush',
        meaning: 'Cọ vẽ',
        pronounce: '/brʌʃ/',
        Types_of_words: 'noun',
    },
    {
        word: 'Camera',
        meaning: 'Máy ảnh',
        pronounce: '/ˈkæmrə/',
        Types_of_words: 'noun',
    },
    {
        word: 'Canvas',
        meaning: 'Tấm vải vẽ tranh sơn dầu',
        pronounce: '/ˈkænvəs/',
        Types_of_words: 'noun',
    },
    {
        word: 'Choir',
        meaning: 'Dàn hợp xướng',
        pronounce: '/ˈkwaɪər/',
        Types_of_words: 'noun',
    },
    {
        word: 'Clap',
        meaning: 'Vỗ tay',
        pronounce: '/klæp/',
        Types_of_words: 'verb',
    },
    {
        word: 'Collection',
        meaning: 'Bộ sưu tập',
        pronounce: '/kəˈlɛkʃən/',
        Types_of_words: 'noun',
    },
    {
        word: 'Composer',
        meaning: 'Nhà soạn nhạc',
        pronounce: '/kəmˈpoʊzər/',
        Types_of_words: 'noun',
    },
    {
        word: 'Concert',
        meaning: 'Buổi trình diễn âm nhạc',
        pronounce: '/kənˈsɜrt/',
        Types_of_words: 'noun',
    },
    {
        word: 'Creative',
        meaning: 'Tính sáng tạo',
        pronounce: '/kriˈeɪtɪv/',
        Types_of_words: 'adj',
    },
    {
        word: 'Culture',
        meaning: 'Văn hóa',
        pronounce: '/ˈkʌlʧər/',
        Types_of_words: 'noun',
    },
    {
        word: 'Design',
        meaning: 'Thiết kế',
        pronounce: '/dɪˈzaɪn/',
        Types_of_words: 'verb',
    },
    {
        word: 'Drawing',
        meaning: 'Bức tranh vẽ',
        pronounce: '/ˈdrɔɪŋ/',
        Types_of_words: 'noun',
    },
    {
        word: 'Exhibition',
        meaning: 'Triển lãm',
        pronounce: '/ˌɛksəˈbɪʃən/',
        Types_of_words: 'noun',
    },
    {
        word: 'Film',
        meaning: 'Bộ phim',
        pronounce: '/fɪlm/',
        Types_of_words: 'noun',
    },

    {
        word: 'Gallery',
        meaning: 'Phòng trưng bày, triển lãm',
        pronounce: '/ˈgæləri/',
        Types_of_words: 'noun',
    },

    {
        word: 'Illustration',
        meaning: 'Hình minh họa',
        pronounce: '/ˌɪləˈstreɪʃən/',
        Types_of_words: 'noun',
    },

    {
        word: 'Image',
        meaning: 'Bức ảnh',
        pronounce: '/ˈɪmɪʤ/',
        Types_of_words: 'noun',
    },

    {
        word: 'Inspiration',
        meaning: 'Nguồn cảm hứng',
        pronounce: '/ˌɪnspəˈreɪʃən/',
        Types_of_words: 'noun',
    },

    {
        word: 'Inspire',
        meaning: 'Truyền cảm hứng',
        pronounce: '/ɪnˈspaɪr/',
        Types_of_words: 'verb',
    },

    {
        word: 'Model',
        meaning: 'Người mẫu',
        pronounce: '/ˈmɑdəl/',
        Types_of_words: 'noun',
    },

    {
        word: 'Movie',
        meaning: 'Bộ phim',
        pronounce: '/ˈmuvi/',
        Types_of_words: 'noun',
    },

    {
        word: 'Music',
        meaning: 'Âm nhạc',
        pronounce: '/ˈmjuzɪk/',
        Types_of_words: 'noun',
    },

    {
        word: 'Novel',
        meaning: 'Tiểu thuyết',
        pronounce: '/ˈnɑvəl/',
        Types_of_words: 'noun',
    },

    {
        word: 'Performance',
        meaning: 'Phần trình diễn, tiết mục',
        pronounce: '/pərˈfɔrməns/',
        Types_of_words: 'noun',
    },

    {
        word: 'Photo',
        meaning: 'Bức ảnh',
        pronounce: '/ˈfoʊˌtoʊ/',
        Types_of_words: 'noun',
    },

    {
        word: 'Photographer',
        meaning: 'Nhiếp ảnh gia',
        pronounce: '/fəˈtɑgrəfər/',
        Types_of_words: 'noun',
    },

    {
        word: 'Poem',
        meaning: 'Bài thơ',
        pronounce: '/ˈpoʊəm/',
        Types_of_words: 'noun',
    },

    {
        word: 'Poet',
        meaning: 'Nhà thơ, thi sĩ',
        pronounce: '/ˈpoʊət/',
        Types_of_words: 'noun',
    },

    {
        word: 'Portrait',
        meaning: 'Tranh chân dung',
        pronounce: '/ˈpɔrtrət/',
        Types_of_words: 'noun',
    },

    {
        word: 'Show',
        meaning: 'Buổi biểu diễn',
        pronounce: '/ʃoʊ/',
        Types_of_words: 'noun',
    },

    {
        word: 'Singer',
        meaning: 'Ca sĩ',
        pronounce: '/ˈsɪŋər/',
        Types_of_words: 'noun',
    },

    {
        word: 'Sketch',
        meaning: 'Bản thảo, bản nháp',
        pronounce: '/skɛʧ/',
        Types_of_words: 'noun',
    },

    {
        word: 'Studio',
        meaning: 'Xưởng (vẽ, chụp ảnh, làm nhạc, làm phim...)',
        pronounce: '/ˈstudiˌoʊ/',
        Types_of_words: 'noun',
    },

    {
        word: 'Video',
        meaning: 'Đoạn phim',
        pronounce: '/ˈvɪdioʊ/',
        Types_of_words: 'noun',
    },

    {
        word: 'Access',
        meaning: 'Sự truy cập',
        pronounce: '/ˈækˌsɛs/',
        Types_of_words: 'noun',
    },

    {
        word: 'Application',
        meaning: 'Ứng dụng trên điện thoại di động, máy tính bảng',
        pronounce: '/ˌæpləˈkeɪʃən/',
        Types_of_words: 'noun',
    },

    {
        word: 'Blog',
        meaning: 'Nhật ký trực tuyến',
        pronounce: '/blɔg/',
        Types_of_words: 'noun',
    },

    {
        word: 'Browser',
        meaning: 'Trình duyệt',
        pronounce: '/ˈbraʊzər/',
        Types_of_words: 'noun',
    },

    {
        word: 'Click',
        meaning: 'Nhấp chuột',
        pronounce: '/klɪk/',
        Types_of_words: 'noun',
    },

    {
        word: 'Computer',
        meaning: 'Máy tính để bàn',
        pronounce: '/kəmˈpjutər/',
        Types_of_words: 'noun',
    },

    {
        word: 'Connection',
        meaning: 'Kết nối',
        pronounce: '/kəˈnɛkʃən/',
        Types_of_words: 'noun',
    },

    {
        word: 'Data',
        meaning: 'Dữ liệu',
        pronounce: '/ˈdeɪtə/',
        Types_of_words: 'noun',
    },

    {
        word: 'Delete',
        meaning: 'Xóa bỏ',
        pronounce: '/dɪˈlit/',
        Types_of_words: 'verb',
    },

    {
        word: 'Download',
        meaning: 'Tải về, tải xuống',
        pronounce: '/ˈdaʊnˌloʊd/',
        Types_of_words: 'verb',
    },

    {
        word: 'Ebook',
        meaning: 'Sách điện tử',
        pronounce: '/i-bʊk/',
        Types_of_words: 'noun',
    },

    {
        word: 'Email',
        meaning: 'Thư điện tử',
        pronounce: '/i-meɪl/',
        Types_of_words: 'noun',
    },

    {
        word: 'Error',
        meaning: 'Lỗi',
        pronounce: '/ˈɛrər/',
        Types_of_words: 'noun',
    },

    {
        word: 'File',
        meaning: 'Tập tin',
        pronounce: '/faɪl/',
        Types_of_words: 'noun',
    },

    {
        word: 'Folder',
        meaning: 'Thư mục',
        pronounce: '/ˈfoʊldər/',
        Types_of_words: 'noun',
    },

    {
        word: 'Hardware',
        meaning: 'Phần cứng',
        pronounce: '/ˈhɑrˌdwɛr/',
        Types_of_words: 'noun',
    },

    {
        word: 'Headphone',
        meaning: 'Tai nghe',
        pronounce: '/ˈhɛdˌfoʊn/',
        Types_of_words: 'noun',
    },

    {
        word: 'Install',
        meaning: 'Cài đặt, lắp đặt',
        pronounce: '/ɪnˈstɔl/',
        Types_of_words: 'noun',
    },

    {
        word: 'Internet',
        meaning: 'Mạng internet',
        pronounce: '/ˈɪntərˌnɛt/',
        Types_of_words: 'noun',
    },

    {
        word: 'Keyboard',
        meaning: 'Bàn phím máy tính',
        pronounce: '/ˈkiˌbɔrd/',
        Types_of_words: 'noun',
    },

    {
        word: 'Laptop',
        meaning: 'Máy tính xách tay',
        pronounce: '/ˈlæpˌtɑp/',
        Types_of_words: 'noun',
    },

    {
        word: 'Link',
        meaning: 'Đường dẫn',
        pronounce: '/lɪŋk/',
        Types_of_words: 'noun',
    },

    {
        word: 'Log in',
        meaning: 'Đăng nhập',
        pronounce: '/lɔg ɪn/',
        Types_of_words: 'noun',
    },

    {
        word: 'Mouse',
        meaning: 'Chuột máy tính',
        pronounce: '/maʊs/',
        Types_of_words: 'noun',
    },

    {
        word: 'Password',
        meaning: 'Mật khẩu',
        pronounce: '/ˈpæˌswɜrd/',
        Types_of_words: 'noun',
    },

    {
        word: 'Program',
        meaning: 'Chương trình máy tính',
        pronounce: '/ˈproʊˌgræm/',
        Types_of_words: 'noun',
    },

    {
        word: 'Sign up',
        meaning: 'Đăng ký',
        pronounce: '/saɪn ʌp/',
        Types_of_words: 'noun',
    },

    {
        word: 'Smartphone',
        meaning: 'Điện thoại thông minh',
        pronounce: '/smärtˌfōn/',
        Types_of_words: 'noun',
    },

    {
        word: 'Social network',
        meaning: 'Mạng xã hội',
        pronounce: '/ˈsoʊʃəl ˈnɛˌtwɜrk/',
        Types_of_words: 'noun',
    },

    {
        word: 'Software',
        meaning: 'Phần mềm',
        pronounce: '/ˈsɔfˌtwɛr/',
        Types_of_words: 'noun',
    },

    {
        word: 'Speaker',
        meaning: 'Loa',
        pronounce: '/ˈspikər/',
        Types_of_words: 'noun',
    },

    {
        word: 'Surf',
        meaning: 'Lướt (web)',
        pronounce: '/sɜrf/',
        Types_of_words: 'verb',
    },

    {
        word: 'System',
        meaning: 'Hệ thống',
        pronounce: '/ˈsɪstəm/',
        Types_of_words: 'noun',
    },

    {
        word: 'Tablet',
        meaning: 'Máy tính bảng',
        pronounce: '/ˈtæblət/',
        Types_of_words: 'noun',
    },

    {
        word: 'Virus',
        meaning: 'Vi rút',
        pronounce: '/ˈvaɪrəs/',
        Types_of_words: 'noun',
    },

    {
        word: 'Wifi',
        meaning: 'Mạng wifi',
        pronounce: '/Wīfī/',
        Types_of_words: 'noun',
    },

    {
        word: 'Wireless',
        meaning: 'Không dây',
        pronounce: '/ˈwaɪrlɪs/',
        Types_of_words: 'adj',
    },

    {
        word: 'Answer',
        meaning: 'Trả lời',
        pronounce: '/ˈænsər/',
        Types_of_words: 'verb',
    },

    {
        word: 'Call',
        meaning: 'Gọi điện thoại',
        pronounce: '/kɔl/',
        Types_of_words: 'verb',
    },

    {
        word: 'Cellphone',
        meaning: 'Điện thoại di động',
        pronounce: '/ˈsɛlfoʊn/',
        Types_of_words: 'noun',
    },

    {
        word: 'Communicate',
        meaning: 'Giao tiếp',
        pronounce: '/kəmˈjunəˌkeɪt/',
        Types_of_words: 'verb',
    },

    {
        word: 'Contact',
        meaning: 'Liên hệ; (n) địa chỉ liên hệ',
        pronounce: '/ˈkɑnˌtækt/',
        Types_of_words: 'verb/noun',
    },

    {
        word: 'Hotline',
        meaning: 'Đường dây nóng',
        pronounce: '/ˈhɑtˌlaɪn/',
        Types_of_words: 'noun',
    },

    {
        word: 'Message',
        meaning: 'Tin nhắn',
        pronounce: '/ˈmɛsəʤ/',
        Types_of_words: 'noun',
    },

    {
        word: 'Missed',
        meaning: 'Lỡ, nhỡ',
        pronounce: '/mɪst/',
        Types_of_words: 'verb',
    },

    {
        word: 'Phone number',
        meaning: 'Số điện thoại',
        pronounce: '/foʊn ˈnʌmbər/',
        Types_of_words: 'noun',
    },

    {
        word: 'Receive',
        meaning: 'Nhận được',
        pronounce: '/rəˈsiv/',
        Types_of_words: 'verb',
    },

    {
        word: 'Send',
        meaning: 'Gửi đi',
        pronounce: '/sɛnd/',
        Types_of_words: 'verb',
    },

    {
        word: 'Signature',
        meaning: 'Chữ ký',
        pronounce: '/ˈsɪgnəʧər/',
        Types_of_words: 'noun',
    },

    {
        word: 'Stamp',
        meaning: 'Tem',
        pronounce: '/stæmp/',
        Types_of_words: 'noun',
    },

    {
        word: 'Text',
        meaning: 'Nhắn tin; tin nhắn',
        pronounce: '/tɛkst/',
        Types_of_words: 'verb/noun',
    },

    {
        word: 'Advertisement',
        meaning: 'Quảng cáo',
        pronounce: '/ˌædvərˈtaɪzmənt/',
        Types_of_words: 'noun',
    },

    {
        word: 'Article',
        meaning: 'Bài báo',
        pronounce: '/ˈɑrtɪkəl/',
        Types_of_words: 'noun',
    },

    {
        word: 'Broadcast',
        meaning: 'Phát sóng; (n) chương trình phát sóng',
        pronounce: '/ˈbrɔdˌkæst/',
        Types_of_words: 'verb/noun',
    },

    {
        word: 'Cable',
        meaning: 'Dây cáp, truyền hình cáp',
        pronounce: '/ˈkeɪbəl/',
        Types_of_words: 'noun',
    },

    {
        word: 'Channel',
        meaning: 'Kênh truyền hình',
        pronounce: '/ˈʧænəl/',
        Types_of_words: 'noun',
    },

    {
        word: 'Character',
        meaning: 'Nhân vật',
        pronounce: '/ˈkɛrɪktər/',
        Types_of_words: 'noun',
    },

    {
        word: 'Column',
        meaning: 'Chuyên mục',
        pronounce: '/ˈkɑləm/',
        Types_of_words: 'noun',
    },

    {
        word: 'Commercial',
        meaning: 'Quảng cáo',
        pronounce: '/kəˈmɜrʃəl/',
        Types_of_words: 'noun',
    },

    {
        word: 'Daily',
        meaning: 'Hằng ngày',
        pronounce: '/ˈdeɪli/',
        Types_of_words: 'noun',
    },

    {
        word: 'Editor',
        meaning: 'Biên tập viên',
        pronounce: '/ˈɛdətər/',
        Types_of_words: 'noun',
    },

    {
        word: 'Episode',
        meaning: 'Phần, tập (phim, chương trình)',
        pronounce: '/ˈɛpəˌsoʊd/',
        Types_of_words: 'noun',
    },

    {
        word: 'Headline',
        meaning: 'Tiêu đề',
        pronounce: '/ˈhɛˌdlaɪn/',
        Types_of_words: 'noun',
    },

    {
        word: 'Issue',
        meaning: 'Số, kỳ phát hành',
        pronounce: '/ˈɪʃu/',
        Types_of_words: 'noun',
    },

    {
        word: 'Live',
        meaning: 'Truyền hình trực tiếp',
        pronounce: '/lɪv/',
        Types_of_words: 'noun',
    },

    {
        word: 'Magazine',
        meaning: 'Tạp chí',
        pronounce: '/ˈmægəˌzin/',
        Types_of_words: 'noun',
    },

    {
        word: 'Newspaper',
        meaning: 'Báo giấy',
        pronounce: '/ˈnuzˌpeɪpər/',
        Types_of_words: 'noun',
    },

    {
        word: 'Publisher',
        meaning: 'Nhà xuất bản',
        pronounce: '/ˈpʌblɪʃər/',
        Types_of_words: 'noun',
    },

    {
        word: 'Reporter',
        meaning: 'Phóng viên',
        pronounce: '/rɪˈpɔrtər/',
        Types_of_words: 'noun',
    },

    {
        word: 'Script',
        meaning: 'Kịch bản',
        pronounce: '/skrɪpt/',
        Types_of_words: 'noun',
    },

    {
        word: 'Subtitle',
        meaning: 'Phụ đề',
        pronounce: '/ˈsʌbˌtaɪtəl/',
        Types_of_words: 'noun',
    },

    { word: 'Carrot', pronounce: '[ˈkærət]', meaning: '(cà rốt)', Types_of_words: 'Noun' },
    { word: 'Tomato', pronounce: '[təˈmeɪtoʊ]', meaning: '(cà chua)', Types_of_words: 'Noun' },
    { word: 'Potato', pronounce: '[pəˈteɪtoʊ]', meaning: '(khoai tây)', Types_of_words: 'Noun' },
    { word: 'Onion', pronounce: '[ˈʌn.jən]', meaning: '(hành tây)', Types_of_words: 'Noun' },
    { word: 'Garlic', pronounce: '[ˈɡɑːr.lɪk]', meaning: '(tỏi)', Types_of_words: 'Noun' },
    { word: 'Cabbage', pronounce: '[ˈkæb.ɪdʒ]', meaning: '(bắp cải)', Types_of_words: 'Noun' },
    { word: 'Lettuce', pronounce: '[ˈlet.ɪs]', meaning: '(rau diếp)', Types_of_words: 'Noun' },
    { word: 'Spinach', pronounce: '[ˈspɪn.ɪtʃ]', meaning: '(rau bina)', Types_of_words: 'Noun' },
    { word: 'Broccoli', pronounce: '[ˈbrɑː.kəl.i]', meaning: '(súp lơ xanh)', Types_of_words: 'Noun' },
    { word: 'Cauliflower', pronounce: '[ˈkɑː.lɪˌflaʊ.ər]', meaning: '(bông cải trắng)', Types_of_words: 'Noun' },
    { word: 'Pumpkin', pronounce: '[ˈpʌmp.kɪn]', meaning: '(bí ngô)', Types_of_words: 'Noun' },
    { word: 'Eggplant', pronounce: '[ˈɛɡ.plænt]', meaning: '(cà tím)', Types_of_words: 'Noun' },
    { word: 'Bell pepper', pronounce: '[bɛl ˈpɛpər]', meaning: '(ớt chuông)', Types_of_words: 'Noun' },
    { word: 'Cucumber', pronounce: '[ˈkjuː.kʌm.bər]', meaning: '(dưa chuột)', Types_of_words: 'Noun' },
    { word: 'Radish', pronounce: '[ˈræ.dɪʃ]', meaning: '(củ cải)', Types_of_words: 'Noun' },
    { word: 'Celery', pronounce: '[ˈsɛl.ər.i]', meaning: '(cần tây)', Types_of_words: 'Noun' },
    { word: 'Zucchini', pronounce: '[zuːˈkiː.ni]', meaning: '(bí xanh)', Types_of_words: 'Noun' },
    { word: 'Avocado', pronounce: '[ˌæv.əˈkɑː.doʊ]', meaning: '(bơ)', Types_of_words: 'Noun' },
    { word: 'Mango', pronounce: '[ˈmæŋ.ɡoʊ]', meaning: '(xoài)', Types_of_words: 'Noun' },
    { word: 'Pineapple', pronounce: '[ˈpaɪnˌæp.əl]', meaning: '(dứa)', Types_of_words: 'Noun' },
];

export default vocabularyList;
